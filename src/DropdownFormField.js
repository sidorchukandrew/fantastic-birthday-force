import { Dropdown } from 'semantic-ui-react';
import FormFieldLabel from "./FormFieldLabel";

export default function DropdownFormField(props) {
    return (
        <div>
            <div className="p-md f-grow">
                <FormFieldLabel>{props.children}</FormFieldLabel>
                <Dropdown selection options={props.options} placeholder={props.placeholder} onChange={props.onChange} />
            </div>
        </div>
    );
}