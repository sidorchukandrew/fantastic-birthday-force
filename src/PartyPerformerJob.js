import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PartyPerformerJob() {
    document.title = "Jobs | Party Performer"
    return (
        <div>
            <div className="p-vertical-md bold-6 font-lg title-muted-text">
                Party Performer
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
                    <span className="bold-6 title-muted-text">Salary:</span> $100 - $120 per hour
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 m-bottom-md title-muted-text">Job Summary:</div>
                    <div className="line-spaced">
                        The party performer is an entertainer at children's birthday parties who will work individually or with one other coworker at the assigned parties and events. Required to be a strong example for our company image and for our community while providing unmatched children's entertainment as a popular fictional character.
                </div>
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 m-bottom-md title-muted-text">Essential Functions:</div>
                    <div className="line-spaced">
                        Party Performer is in charge of coming up with creative themes, working well with other individuals that work at the organization, and working alone. They will be responsible for dressing up as the character of choice, and staying in character throughout the event/birthday party to assure that the duty is being fulfilled as well as leaving our customers satisfied and pleased. The party Performers role in this company is important because they are the face of this organization, so they are responsible for setting a good example for the Fantastic Birthday Force, as well as our community.
                </div>
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 title-muted-text">Main Duties:</div>
                    <div className="line-spaced">
                        <ul>
                            <li>
                                Attend children's birthday parties, dressed up in the child’s costume of choice. Engage in a dramatized scene consistent with character necessity, with the child and/or coworker. Must put on a show in front of one or several children to maintain entertainment and captivate attention. Employees must be willing to travel and be around children of all ages. All scenes are performed and communicated in a safe yet creative enactment, and employees may never break character while arriving at the job site, performing, or leaving the scene. Employees may not handle common items inconsistent with their assigned character (cell phones, attire that may appear out of character such as shoes or outerwear, snacks or water bottles, etc), and may not speak in language inconsistent with their assigned character.
                        </li>
                        </ul>
                    </div>
                </div>

                <div className="p-vertical-md m-bottom-lg font-md">
                    <div className="bold-6 m-bottom-md title-muted-text">Occasional Duties:</div>
                    <div className="line-spaced">
                        <ul>
                            <li>
                                Perform at community events as scheduled, rehearse and memorize longer performances, and interact with the audience. Employees must be committed to our mission to serve our community.
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-end m-bottom-lg">
                <Link to="/jobs/party-performer/application">
                    <Button color="blue">Continue to Application</Button>
                </Link>
            </div>
        </div>
    );
}