import SectionTitle from "./SectionTitle";
import FormField from "./FormField";
import { YES_OR_NO_OPTIONS } from "./OptionsUtils";
import DropdownFormField from "./DropdownFormField";
import { useState } from "react";

export default function GeneralInformation(props) {

    const [section, setSection] = useState({});

    let handleFieldUpdated = (field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));
        sectionCopy[field] = updates;
        setSection(sectionCopy);

        if (props.onChange) {
            props.onChange("General Information", sectionCopy);
        }
    }

    return (
        <div className="m-bottom-lg">
            <SectionTitle>General Information</SectionTitle>

            <FormField
                name="Full Name"
                placeholder="Example: John Doe"
                onChange={(updates) => handleFieldUpdated("Full name", updates)}
            />

            <FormField
                name="Social Security Number"
                placeholder="123-45-6789"
                onChange={(updates) => handleFieldUpdated("Social security number", updates)}
            />

            <div className="bold-6 p-md">Address Details</div>
            <FormField
                name="Street Name"
                onChange={(updates) => handleFieldUpdated("Street name", updates)}
            />

            <FormField
                name="City"
                onChange={(updates) => handleFieldUpdated("City", updates)}
            />

            <FormField
                name="State"
                onChange={(updates) => handleFieldUpdated("State", updates)}
            />

            <FormField
                type="tel"
                name="Phone Number"
                placeholder="(555) 552-0192"
                onChange={(updates) => handleFieldUpdated("Phone number", updates)}
            />

            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                placeholder="Yes or no"
                onChange={(event, data) => handleFieldUpdated("Over 18", data.value)}
            >
                Are you 18 years or older?
            </DropdownFormField>

            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                placeholder="Yes or no"
                onChange={(event, data) => handleFieldUpdated("Eligible to work in the US", data.value)}
            >
                Are you currently eligible to work in the United States?
            </DropdownFormField>
        </div>
    );
}