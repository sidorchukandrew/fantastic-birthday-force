import DropdownFormField from "./DropdownFormField";
import { EDUCATION_LEVELS, EDUCATION_LEVEL_OPTIONS } from "./OptionsUtils";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import FormField from "./FormField";

export default function EducationInformation(props) {

    const [section, setSection] = useState({});
    const [hasAttendedCollege, setHasAttendedCollege] = useState(false);

    let handleEducationLevelChosen = (educationLevel) => {

        handleFieldUpdated("Education level", educationLevel);

        if (educationLevel === EDUCATION_LEVELS.SOME_COLLEGE || educationLevel === EDUCATION_LEVELS.ASSOCIATES
            || educationLevel === EDUCATION_LEVELS.BACHELORS || educationLevel === EDUCATION_LEVELS.MASTERS
            || educationLevel === EDUCATION_LEVELS.PHD) {

            setHasAttendedCollege(true);
        } else {
            let sectionCopy = JSON.parse(JSON.stringify(section));
            delete sectionCopy["Name of college"];
            delete sectionCopy["Subject studied"];

            setSection(sectionCopy);

            if (props.onChange) {
                props.onChange("educationInformation", sectionCopy);
            }

            setHasAttendedCollege(false);
        }
    };

    let collegeFields = (
        <div className="light-blue-bg rounded-sm">
            <FormField
                name="Subject studied"
                onChange={(updates) => handleFieldUpdated("subjectStudied", updates)}
            />
            <FormField
                name="Name and location of college"
                placeholder="SUNY Oswego at Oswego, NY"
                onChange={(updates) => handleFieldUpdated("college", updates)}
            />
        </div>
    );

    let handleFieldUpdated = (field, updates) => {
        let sectionCopy = JSON.parse(JSON.stringify(section));
        sectionCopy[field] = updates;
        setSection(sectionCopy);

        if (props.onChange) {
            props.onChange("educationInformation", sectionCopy);
        }
    }

    return (
        <div className="m-bottom-lg">
            <SectionTitle>Education</SectionTitle>
            <DropdownFormField
                options={EDUCATION_LEVEL_OPTIONS}
                onChange={(event, data) => handleEducationLevelChosen(data.value)}
            >
                Select the highest level of education you have attained
            </DropdownFormField>

            {hasAttendedCollege ? collegeFields : ""}
        </div>
    );
}