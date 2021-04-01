import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function JobsListing() {
    document.title = "FBF | Jobs";
    return (
        <div>
            <div className="bold-6 font-lg p-md m-bottom-lg">
                Fantastic Birthday Force is hiring!
            </div>

            <div className="bold-6 font-md p-md m-bottom-lg">
                Who we are:
            </div>

            <div className="text-center font-md m-bottom-lg p-md">
                Apply Now
            </div>
            <div className="d-flex space-evenly">
                <Link to="/jobs/party-performer">
                    <Button color="blue">Party Performer</Button>
                </Link>
                <Link to="/jobs/party-manager">
                    <Button color="blue">Party Manager</Button>
                </Link>
            </div>
        </div>
    );
}