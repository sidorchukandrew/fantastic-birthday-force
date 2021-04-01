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
            props.onChange("Former Employment", sectionCopy);
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
                    onChange={(updates) => handleFieldUpdated(0, "Dates", updates)}
                />
                <FormField
                    name="Name and location"
                    onChange={(updates) => handleFieldUpdated(0, "Name and location", updates)}
                />
                <FormField
                    name="Salary"
                    onChange={(updates) => handleFieldUpdated(0, "Salary", updates)}
                />
                <FormField
                    name="Position title"
                    onChange={(updates) => handleFieldUpdated(0, "Position", updates)}
                />
                <FormField
                    name="Reason for leaving"
                    onChange={(updates) => handleFieldUpdated(0, "Reason for leaving", updates)}
                />
            </div>

            <div className="p-md bold-6">Employer 2</div>

            <div className="d-flex rows-on-small">
                <FormField
                    name="Dates"
                    onChange={(updates) => handleFieldUpdated(1, "Dates", updates)}
                />
                <FormField
                    name="Name and location"
                    onChange={(updates) => handleFieldUpdated(1, "Name and location", updates)}
                />
                <FormField
                    name="Salary"
                    onChange={(updates) => handleFieldUpdated(1, "Salary", updates)}
                />
                <FormField
                    name="Position title"
                    onChange={(updates) => handleFieldUpdated(1, "Position", updates)}
                />
                <FormField
                    name="Reason for leaving"
                    onChange={(updates) => handleFieldUpdated(1, "Reason for leaving", updates)}
                />
            </div>

            <div className="p-md bold-6">Employer 3</div>

            <div className="d-flex rows-on-small">
                <FormField
                    name="Dates"
                    onChange={(updates) => handleFieldUpdated(2, "Dates", updates)}
                />
                <FormField
                    name="Name and location"
                    onChange={(updates) => handleFieldUpdated(2, "Name and location", updates)}
                />
                <FormField
                    name="Salary"
                    onChange={(updates) => handleFieldUpdated(2, "Salary", updates)}
                />
                <FormField
                    name="Position title"
                    onChange={(updates) => handleFieldUpdated(2, "Position", updates)}
                />
                <FormField
                    name="Reason for leaving"
                    onChange={(updates) => handleFieldUpdated(2, "Reason for leaving", updates)}
                />
            </div>
        </div>
    );
}