import FormField from "./FormField";
import FormFieldLabel from "./FormFieldLabel";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

export default function FormerEmploymentInformation(props) {
    const [section, setSection] = useState({ employers: [] });

    let handleFieldUpdated = (employerNumber, field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));

        if (!sectionCopy["employers"][employerNumber]) {
            sectionCopy["employers"][employerNumber] = {};
        }

        sectionCopy["employers"][employerNumber][field] = updates;
        setSection(sectionCopy);

        if (props.onChange) {
            props.onChange("formerEmploymentInformation", sectionCopy);
        }
    }

    return (
        <div className="m-bottom-lg">
            <SectionTitle>Former Employment</SectionTitle>
            <div className="p-md">
                <FormFieldLabel>List below your last three employers starting with the most recent</FormFieldLabel>
                <div className="bold-6">Employer 1</div>
            </div>

            <div className="d-flex rows-on-small">
                <FormField
                    name="Dates"
                    onChange={(updates) => handleFieldUpdated(0, "dates", updates)}
                />
                <FormField
                    name="Name and location"
                    onChange={(updates) => handleFieldUpdated(0, "nameAndLocation", updates)}
                />
                <FormField
                    name="Salary"
                    onChange={(updates) => handleFieldUpdated(0, "salary", updates)}
                />
                <FormField
                    name="Position title"
                    onChange={(updates) => handleFieldUpdated(0, "position", updates)}
                />
                <FormField
                    name="Reason for leaving"
                    onChange={(updates) => handleFieldUpdated(0, "reasonForLeaving", updates)}
                />
            </div>

            <div className="p-md bold-6">Employer 2</div>

            <div className="d-flex rows-on-small">
                <FormField
                    name="Dates"
                    onChange={(updates) => handleFieldUpdated(1, "dates", updates)}
                />
                <FormField
                    name="Name and location"
                    onChange={(updates) => handleFieldUpdated(1, "nameAndLocation", updates)}
                />
                <FormField
                    name="Salary"
                    onChange={(updates) => handleFieldUpdated(1, "salary", updates)}
                />
                <FormField
                    name="Position title"
                    onChange={(updates) => handleFieldUpdated(1, "position", updates)}
                />
                <FormField
                    name="Reason for leaving"
                    onChange={(updates) => handleFieldUpdated(1, "reasonForLeaving", updates)}
                />
            </div>

            <div className="p-md bold-6">Employer 3</div>

            <div className="d-flex rows-on-small">
                <FormField
                    name="Dates"
                    onChange={(updates) => handleFieldUpdated(2, "dates", updates)}
                />
                <FormField
                    name="Name and location"
                    onChange={(updates) => handleFieldUpdated(2, "nameAndLocation", updates)}
                />
                <FormField
                    name="Salary"
                    onChange={(updates) => handleFieldUpdated(2, "salary", updates)}
                />
                <FormField
                    name="Position title"
                    onChange={(updates) => handleFieldUpdated(2, "position", updates)}
                />
                <FormField
                    name="Reason for leaving"
                    onChange={(updates) => handleFieldUpdated(2, "reasonForLeaving", updates)}
                />
            </div>
        </div>
    );
}