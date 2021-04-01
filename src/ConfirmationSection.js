import { useState } from "react";
import CertifyBlurb from "./CertifyBlurb";
import FormField from "./FormField";

export default function ConfirmationSection(props) {
    const [dated, setDated] = useState(false);
    const [signed, setSigned] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const handleDated = (value) => {
        setDated(Boolean(value));

        if (confirmed !== (Boolean(value) && signed)) {
            props.onChange((Boolean(value) && signed));
            setConfirmed((Boolean(value) && signed));
        }
    }

    const handleSigned = (value) => {
        setSigned(Boolean(value));

        if (confirmed !== (Boolean(value) && dated)) {
            props.onChange((Boolean(value) && dated));
            setConfirmed((Boolean(value) && dated));
        }
    }

    return (
        <div className="m-bottom-lg">
            <div className="light-grey-bg rounded-sm">
                <CertifyBlurb />
            </div>
            <div className="d-flex rows-on-small">
                <FormField
                    name="Today's date"
                    placeholder="12/12/2021"
                    onChange={(value) => handleDated(value)}
                />
                <FormField
                    name="Your signature (type your name to sign)"
                    placeholder="Example: John Doe"
                    onChange={(value) => handleSigned(value)}
                />
            </div>
        </div>
    );
}