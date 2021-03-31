import { Input, Label } from "semantic-ui-react";
import FormFieldLabel from "./FormFieldLabel";

export default function FormField(props) {
    return (
        <div className="p-vertical-md f-grow">
            <FormFieldLabel>{props.name}</FormFieldLabel>
            <Input
                type={props.type ? props.type : ""}
                placeholder={props.placeholder ? props.placeholder : props.name}
                fluid
                labelPosition="left"
            >
                {props.label ? <Label>{props.label}</Label> : ""}
                <input />
            </Input>
        </div>
    );
}