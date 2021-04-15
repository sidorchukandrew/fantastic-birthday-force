import { Button, Icon } from "semantic-ui-react";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function ResumeSection(props) {
    const [resume, setResume] = useState(null);

    const hiddenFileInput = React.useRef(null);

    const handleAttachClick = () => {
        hiddenFileInput.current.click();
    }

    const handleFileChosen = (event) => {
        setResume(event.target.files[0]);
    }

    return (
        <div className="m-bottom-lg">
            <SectionTitle>Resume</SectionTitle>
            <input
                type="file"
                style={{ display: "none" }}
                ref={hiddenFileInput}
                onChange={handleFileChosen}
            />
            <div className="p-vertical-md">

                {resume ?

                    <div>{resume.name}
                        <span className="p-horiz-md">
                            <Button icon size="mini" onClick={() => setResume(null)}>
                                <Icon name="close" />
                            </Button>
                        </span>
                    </div>
                    :
                    <Button
                        onClick={handleAttachClick}
                    >
                        Attach
                    </Button>
                }
            </div>
        </div>
    );
}