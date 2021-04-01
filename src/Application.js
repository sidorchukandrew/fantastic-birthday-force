import { Button } from "semantic-ui-react";
import EducationInformation from "./EducationInformation";
import EmploymentInformation from "./EmploymentInformation";
import ExtraInformation from "./ExtraInformation";
import FormerEmploymentInformation from "./FormerEmploymentInformation";
import GeneralInformation from "./GeneralInformation";
import ReferencesSection from "./ReferencesSection";
import ConfirmationSection from "./ConfirmationSection";
import { useState } from "react";
import { useParams, useHistory } from "react-router";
import { toJobName } from "./NavUtils";
import applicationsApi from "./api/applications";

export default function Application() {
    const [application, setApplication] = useState({});
    const [confirmed, setConfirmed] = useState(false);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    const jobName = toJobName(params.name);

    const router = useHistory();

    let handleSectionUpdated = (section, updates) => {
        let applicationCopy = JSON.parse(JSON.stringify(application));
        applicationCopy[section] = updates;

        setApplication(applicationCopy);
    }

    let handleSubmit = async () => {
        if (confirmed) {
            setLoading(true);
            let applicationCopy = JSON.parse(JSON.stringify(application));
            applicationCopy.position = jobName;
            setApplication(applicationCopy);
            try {
                await applicationsApi.postApplication(applicationCopy);
                router.push("/success");
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div className="d-flex f-column">
            <div className="bold-6 text-center font-lg p-vertical-lg">
                {jobName}
            </div>
            <GeneralInformation
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
                showGender={jobName === "Party Performer"}
            />
            <EmploymentInformation
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
            />
            <EducationInformation
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
            />
            <ExtraInformation
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
            />
            <FormerEmploymentInformation
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
            />
            <ReferencesSection
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
            />
            <ConfirmationSection
                onChange={(confirmed) => setConfirmed(confirmed)} />
            <div className="d-flex m-bottom-lg justify-end">
                <Button
                    color="blue"
                    disabled={!confirmed}
                    onClick={handleSubmit}
                    loading={loading}
                >
                    Submit Your Application
                </Button>
            </div>
        </div>
    );
}