import FormField from "./FormField";
import SectionTitle from "./SectionTitle";
import { YES_OR_NO_OPTIONS } from "./OptionsUtils";
import DropdownFormField from "./DropdownFormField";
import { useState } from "react";

export default function EmploymentInformation() {

    const [isCurrentlyEmployed, setIsCurrentlyEmployed] = useState(false);

    let currentlyEmployedLocation = (<FormField name="Where are you currently employed?" />);

    return (
        <div className="m-bottom-lg">
            <SectionTitle>Employment Information</SectionTitle>

            <FormField name="Date you can start working" placeholder="12/12/2021" />

            <FormField name="Desired salary" placeholder="Amount" label="$" type="number" />

            <DropdownFormField options={YES_OR_NO_OPTIONS} onChange={(event, data) => setIsCurrentlyEmployed(data.value)}>
                Are you currently employed?
            </DropdownFormField>

            {isCurrentlyEmployed ? currentlyEmployedLocation : ""}

            <FormField name="Who were you referred by?" />
        </div >
    );
}