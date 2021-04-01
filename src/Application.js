import { Button } from "semantic-ui-react";
import EducationInformation from "./EducationInformation";
import EmploymentInformation from "./EmploymentInformation";
import ExtraInformation from "./ExtraInformation";
import FormerEmploymentInformation from "./FormerEmploymentInformation";
import GeneralInformation from "./GeneralInformation";
import ReferencesSection from "./ReferencesSection";
import ConfirmationSection from "./ConfirmationSection";
import { useState } from "react";
import { useParams } from "react-router";
import { toJobName } from "./NavUtils";

export default function Application() {
    const [application, setApplication] = useState({});
    const [confirmed, setConfirmed] = useState(false);

    const params = useParams();
    const jobName = toJobName(params.name);
    console.log(jobName);

    let handleSectionUpdated = (section, updates) => {
        console.log("Section updated!", updates);
        let applicationCopy = JSON.parse(JSON.stringify(application));
        applicationCopy[section] = updates;

        setApplication(applicationCopy);
    }

    return (
        <div className="d-flex f-column">
            <div className="bold-6 text-center font-lg p-vertical-lg">
                {jobName}
            </div>
            <GeneralInformation
                onChange={(section, updates) => handleSectionUpdated(section, updates)}
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
                >
                    Submit Your Application
                </Button>
            </div>
        </div>
    );
}