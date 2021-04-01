import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PartyManagerJob() {
    document.title = "Jobs | Party Manager";
    return (
        <div>
            <div className="p-vertical-md bold-6 font-lg title-muted-text">
                Party Manager
            </div>
            <div className="p-vertical-md font-md title-muted-text">
                <div>
                    Fantastic Birthday Force
                </div>
                <div>
                    Fort Mill, SC, 29708
                </div>
            </div>
            <div className="muted-text">

                <div className="p-vertical-md m-bottom-lg font-md">
                    <span className="bold-6 title-muted-text">Salary:</span> $40,000 - $45,000
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 m-bottom-md title-muted-text">Job Summary and Essential Functions:</div>
                    <div className="line-spaced">
                        The Party Manager helps ensure event planning goes smoothly by scheduling and planning events according to the correct dates and party requirements. Essential functions include answering phone calls, talking to clients, scheduling appointments, overseeing positions, paying employees and taking care of compensation from clients. Party managers are required to be present and on scene for the duration of the event/party.
                    </div>
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 title-muted-text">Main Duties:</div>
                    <div className="line-spaced">
                        <ul>
                            <li>
                                Include but are not limited to answering phone calls, scheduling appointments, talking to clients, filling job positions, and taking care of compensation needs. Party Managers act as performer caretakers as they enter and leave an event, to preserve the image and fantasy of each character. Must be organized and active in the work environment. This individual must be open to communication and have a positive attitude.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 m-bottom-md title-muted-text">Occasional Duties:</div>
                    <div className="line-spaced">
                        <ul>
                            <li>
                                Managers are required to be present at scheduled events and handle company finances. This individual will also have to be familiar with the training process and be willing to help performers along the way.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-end m-bottom-lg">
                <Link to="/jobs/party-manager/application">
                    <Button color="blue">Continue to Application</Button>
                </Link>
            </div>
        </div>
    );
}