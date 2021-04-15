import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function JobsListing() {
    document.title = "FBF | Jobs";
    return (
        <div>
            <div className="bold-6 font-lg p-md m-bottom-lg title-muted-text">
                Fantastic Birthday Force is hiring!
            </div>

            <div className="p-vertical-md m-bottom-lg font-md">
                <div className="bold-6 m-bottom-md title-muted-text">Who we are:</div>
                <div className="line-spaced muted-text">
                    Fantastic Birthday Force is all about creating unforgettable fun for our tiny clients! We are a competitive local source of entertainment for children’s birthday parties, and provide popular children's characters such as superheroes, super villains, princesses, and other performers to entertain and perform at their parties and events. We also partner with Make-A-Wish and work with children's hospitals to serve children in need. The Fantastic Birthday Force is centered on providing memorable entertainment for our community and we are centered on customer satisfaction while keeping our environment healthy, abiding by labor laws, providing competitive compensation to our loyal employees, and giving back to the community that we serve. We offer compensation packages to all employees that include health care benefits, dental & vision coverage, and offer bonuses, all while keeping our services profitable for our stakeholders. In our commitment to our community, we compensate employees for up to two workdays in which they spend serving the Fort Mills community and children in need in charitable and volunteer-focused work. Apply today to join The Fantastic Birthday Force family!
                </div>
            </div>

            <div className="text-center font-md m-bottom-lg p-md title-muted-text">
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