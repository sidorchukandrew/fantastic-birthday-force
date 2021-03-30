import { Button } from "semantic-ui-react";
import FormField from "./FormField";

export default function Application() {
    return (
        <div className="d-flex f-column">
            <FormField name="First Name" />

            <FormField name="Last Name" />

            <FormField name="Address" />
            <div className="d-flex justify-end">
                <Button color="blue">Submit Your Application</Button>
            </div>
        </div>
    );
}