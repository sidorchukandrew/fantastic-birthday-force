import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function SuccessfulSubmission() {
    return (
        <div className="p-lg light-grey-bg rounded-sm font-md bold-6 text-center">
            <div className="p-md">
                We received your submission
            </div>
            <div className="p-md">
                Thanks for applying!
            </div>
            <div className="p-md">
                <Link to="/jobs">
                    <Button color="blue">Take Me Home</Button>
                </Link>
            </div>
        </div>
    );
}