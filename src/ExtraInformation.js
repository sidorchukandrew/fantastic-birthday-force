import { useState } from "react";
import DropdownFormField from "./DropdownFormField";
import FormField from "./FormField";
import { YES_OR_NO_OPTIONS } from "./OptionsUtils";
import SectionTitle from "./SectionTitle";

export default function ExtraInformation(props) {
    const [hasMilitaryService, setHasMilitaryService] = useState(false);
    const [section, setSection] = useState({});


    let handleFieldUpdated = (field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));
        sectionCopy[field] = updates;
        setSection(sectionCopy);

        console.log(sectionCopy);
        if (props.onChange) {
            props.onChange("additionalInformation", sectionCopy);
        }
    }

    let militaryQuestions = (
        <div className="light-blue-bg rounded-sm">
            <FormField
                name="Enter rank"
                onChange={(updates) => handleFieldUpdated("rank", updates)}
            />
            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                placeholder="Yes or no"
                onChange={(event, data) => handleFieldUpdated("nationalOrReserves", data.value)}
            >
                Present membership in national guard or reserves?
            </DropdownFormField>
        </div>
    );

    let handleHasMilitaryService = (value) => {
        setHasMilitaryService(value);
        handleFieldUpdated("militaryService", value);

        if (!value) {
            let sectionCopy = JSON.parse(JSON.stringify(section));
            delete sectionCopy['rank'];
            delete sectionCopy['nationalOrReserves'];
            setSection(sectionCopy);

            if (props.onChange) {
                props.onChange("additionalInformation", sectionCopy);
            }
        }
    }
    return (
        <div className="m-bottom-md">
            <SectionTitle>Additional Information</SectionTitle>

            <FormField
                textarea
                name="List any special skills or activities (athletic, civic, etc...)"
                onChange={(updates) => handleFieldUpdated("specialSkills", updates)}
            />

            <DropdownFormField
                options={YES_OR_NO_OPTIONS}
                onChange={(event, data) => handleHasMilitaryService(data.value)}
                placeholder="Yes or no"
            >
                US military service?
            </DropdownFormField>

            {hasMilitaryService ? militaryQuestions : ""}
        </div>
    )
}