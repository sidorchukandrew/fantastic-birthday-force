import SectionTitle from "./SectionTitle";
import FormFieldLabel from "./FormFieldLabel";
import FormField from "./FormField";
import { useState } from "react";

export default function ReferencesSection(props) {
    const [section, setSection] = useState({ references: [] });

    let handleFieldUpdated = (referenceNumber, field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));

        if (!sectionCopy["references"][referenceNumber]) {
            sectionCopy["references"][referenceNumber] = {};
        }

        sectionCopy["references"][referenceNumber][field] = updates;
        setSection(sectionCopy);

        if (props.onChange) {
            props.onChange("referencesInformation", sectionCopy);
        }
    }

    return (
        <div className="m-bottom-lg">
            <SectionTitle>References</SectionTitle>

            <div className="p-md">
                <FormFieldLabel>Provide 3 references, not related to you</FormFieldLabel>
                <div className="bold-6 p-top-md">Reference 1</div>
            </div>

            <div className="d-flex rows-on-small">
                <FormField
                    name="Name"
                    onChange={(updates) => handleFieldUpdated(0, "name", updates)}
                />
                <FormField
                    name="Phone number"
                    type="tel"
                    onChange={(updates) => handleFieldUpdated(0, "phoneNumber", updates)}
                />
                <FormField
                    name="Business name"

                    onChange={(updates) => handleFieldUpdated(0, "businessName", updates)}
                />
                <FormField
                    name="Years acquainted"
                    type="number"
                    onChange={(updates) => handleFieldUpdated(0, "yearsAcquainted", updates)}
                />
            </div>

            <div className="p-md bold-6">Reference 2</div>
            <div className="d-flex rows-on-small">
                <FormField
                    name="Name"
                    onChange={(updates) => handleFieldUpdated(1, "name", updates)}
                />
                <FormField
                    name="Phone number"
                    type="tel"
                    onChange={(updates) => handleFieldUpdated(1, "phoneNumber", updates)}
                />
                <FormField
                    name="Business name"

                    onChange={(updates) => handleFieldUpdated(1, "businessName", updates)}
                />
                <FormField
                    name="Years acquainted"
                    type="number"
                    onChange={(updates) => handleFieldUpdated(1, "yearsAcquainted", updates)}
                />
            </div>

            <div className="p-md bold-6">Reference 3</div>
            <div className="d-flex rows-on-small">
                <FormField
                    name="Name"
                    onChange={(updates) => handleFieldUpdated(2, "name", updates)}
                />
                <FormField
                    name="Phone number"
                    type="tel"
                    onChange={(updates) => handleFieldUpdated(2, "phoneNumber", updates)}
                />
                <FormField
                    name="Business name"

                    onChange={(updates) => handleFieldUpdated(2, "businessName", updates)}
                />
                <FormField
                    name="Years acquainted"
                    type="number"
                    onChange={(updates) => handleFieldUpdated(2, "yearsAcquainted", updates)}
                />
            </div>
        </div>
    );
}