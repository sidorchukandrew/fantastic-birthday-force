import SectionTitle from "./SectionTitle";
import FormField from "./FormField";
import { GENDER_OPTIONS, YES_OR_NO_OPTIONS } from "./OptionsUtils";
import DropdownFormField from "./DropdownFormField";
import { useState } from "react";

export default function GeneralInformation(props) {

    const [section, setSection] = useState({});

    let handleFieldUpdated = (field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));
        sectionCopy[field] = updates;
        setSection(sectionCopy);

        if (props.onChange) {
            props.onChange("generalInformation", sectionCopy);
        }
    }

    let genderField = (
        <DropdownFormField
            options={GENDER_OPTIONS}
            placeholder="Male or female"
            onChange={(event, data) => handleFieldUpdated("gender", data.value)}
        >
            Select your gender
        </DropdownFormField>
    );

    return (
        <div className="m-bottom-lg">
            <SectionTitle>General Information</SectionTitle>

            <FormField
                name="Full Name"
                placeholder="Example: John Doe"
                onChange={(updates) => handleFieldUpdated("fullName", updates)}
            />

            <FormField
                name="Social Security Number"
                placeholder="123-45-6789"
                onChange={(updates) => handleFieldUpdated("ssn", updates)}
            />

            <div className="bold-6 p-md">Address Details</div>
            <FormField
                name="Street Name"
                onChange={(updates) => handleFieldUpdated("streetName", updates)}
            />

            <FormField
                name="City"
                onChange={(updates) => handleFieldUpdated("city", updates)}
            />

            <FormField
                name="State"
                onChange={(updates) => handleFieldUpdated("state", updates)}
            />

            <FormField
                type="tel"
                name="Phone Number"
                placeholder="(555) 552-0192"
                onChange={(updates) => handleFieldUpdated("phoneNumber", updates)}
            />

            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                placeholder="Yes or no"
                onChange={(event, data) => handleFieldUpdated("over18", data.value)}
            >
                Are you 18 years or older?
            </DropdownFormField>

            {props.showGender ? genderField : ""}

            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                placeholder="Yes or no"
                onChange={(event, data) => handleFieldUpdated("eligibleForWork", data.value)}
            >
                Are you currently eligible to work in the United States?
            </DropdownFormField>
        </div>
    );
}