import { Form, Input, Label, TextArea } from "semantic-ui-react";
import FormFieldLabel from "./FormFieldLabel";

export default function FormField(props) {

    let handleOnChange = (value) => {
        if (props.onChange) {
            props.onChange(value);
        }
    }

    let input = (
        <Input
            type={props.type ? props.type : ""}
            placeholder={props.placeholder ? props.placeholder : props.name}
            fluid
            labelPosition="left"
            onChange={(event) => handleOnChange(event.target.value)}
        >
            {props.label ? <Label>{props.label}</Label> : ""}
            <input />
        </Input>
    );

    let textarea = (
        <Form>
            <TextArea
                placeholder={props.placeholder ? props.placeholder : props.name}
                onChange={(event) => handleOnChange(event.target.value)}
            />
        </Form>
    );

    return (
        <div className="p-md f-grow">
            <FormFieldLabel>{props.name}</FormFieldLabel>
            {props.textarea ? textarea : input}
        </div>
    );
}