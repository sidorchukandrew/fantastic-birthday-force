import { Dropdown } from 'semantic-ui-react';
import FormFieldLabel from "./FormFieldLabel";

export default function DropdownFormField(props) {
    return (
        <div>
            <div className="p-vertical-md f-grow">
                <FormFieldLabel>{props.children}</FormFieldLabel>
                <Dropdown selection options={props.options} onChange={props.onChange} />
            </div>
        </div>
    );
}