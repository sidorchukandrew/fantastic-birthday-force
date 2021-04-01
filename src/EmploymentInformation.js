import FormField from "./FormField";
import SectionTitle from "./SectionTitle";
import { YES_OR_NO_OPTIONS } from "./OptionsUtils";
import DropdownFormField from "./DropdownFormField";
import { useState } from "react";

export default function EmploymentInformation(props) {

    const [isCurrentlyEmployed, setIsCurrentlyEmployed] = useState(false);
    const [section, setSection] = useState({});

    let handleFieldUpdated = (field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));
        sectionCopy[field] = updates;
        setSection(sectionCopy);

        if (props.onChange) {
            props.onChange("Employment Information", sectionCopy);
        }
    }

    let currentlyEmployedLocation = (
        <div className="light-blue-bg rounded-sm">
            <FormField
                name="Where are you currently employed?"
                onChange={(updates) => handleFieldUpdated("Current employment", updates)}
            />
        </div>
    );

    return (
        <div className="m-bottom-lg">
            <SectionTitle>Employment Information</SectionTitle>

            <FormField
                name="Date you can start working"
                placeholder="12/12/2021"
                onChange={(updates) => handleFieldUpdated("Start date", updates)}
            />

            <FormField
                name="Desired salary"
                placeholder="Amount"
                label="$"
                type="number"
                onChange={(updates) => handleFieldUpdated("Desired salary", updates)}
            />

            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                placeholder="Yes or no"
                onChange={(event, data) => setIsCurrentlyEmployed(data.value)}
            >
                Are you currently employed?
            </DropdownFormField>

            {isCurrentlyEmployed ? currentlyEmployedLocation : ""}

            <FormField
                name="Who were you referred by?"
                onChange={(updates) => handleFieldUpdated("Referred by", updates)}
            />
        </div >
    );
}