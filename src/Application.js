import { Button } from "semantic-ui-react";
import EducationInformation from "./EducationInformation";
import EmploymentInformation from "./EmploymentInformation";
import FormerEmploymentInformation from "./FormerEmploymentInformation";
import GeneralInformation from "./GeneralInformation";
import ReferencesSection from "./ReferencesSection";

export default function Application() {
    return (
        <div className="d-flex f-column">
            <GeneralInformation />
            <EmploymentInformation />
            <EducationInformation />
            <FormerEmploymentInformation />
            <ReferencesSection />
            <div className="d-flex justify-end">
                <Button color="blue">Submit Your Application</Button>
            </div>
        </div>
    );
}