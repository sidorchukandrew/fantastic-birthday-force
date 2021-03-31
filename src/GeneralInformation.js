import SectionTitle from "./SectionTitle";
import FormField from "./FormField";
import { YES_OR_NO_OPTIONS } from "./OptionsUtils";
import DropdownFormField from "./DropdownFormField";

export default function GeneralInformation() {

    return (
        <div className="m-bottom-lg">
            <SectionTitle>General Information</SectionTitle>

            <FormField name="Full Name" placeholder="Example: John Doe" />

            <FormField name="Social Security Number" placeholder="123-45-6789" />

            <div className="bold-6 p-vertical-md">Address Details</div>
            <FormField name="Street Name" />

            <FormField name="City" />

            <FormField name="State" />

            <FormField type="tel" name="Phone Number" placeholder="(555) 552-0192" />

            <DropdownFormField options={YES_OR_NO_OPTIONS}>
                Are you 18 years or older?
            </DropdownFormField>

            <DropdownFormField options={YES_OR_NO_OPTIONS}>
                Are you prevented from lawfully becoming employed in this country because of Visa or immigration status?
            </DropdownFormField>
        </div>
    );
}