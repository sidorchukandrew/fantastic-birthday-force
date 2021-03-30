import { Input } from "semantic-ui-react";

export default function FormField(props) {
    return (
        <div className="p-vertical-md f-grow">
            <Input placeholder={props.name} fluid />
        </div>
    );
}