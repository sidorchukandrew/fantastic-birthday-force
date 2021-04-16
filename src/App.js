import Application from './Application';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import JobsListing from "./JobsListing";
import PartyPerformerJob from './PartyPerformerJob';
import PartyManagerJob from './PartyManagerJob';
import logo from "./android-chrome-512x512.png";
import { Button } from "semantic-ui-react";
import SuccessfulSubmission from './SuccessfulSubmission';
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <div className="App p-lg" style={{ background: "white" }}>
      <Router>
        <ScrollToTop />
        <div className="theme-font font-lg p-vertical-md m-bottom-lg text-center">
          <img src={logo} alt="logo" style={{ height: "85px" }} className="m-bottom-md" />
          <div className="theme-font font-lg title-muted-text">Fantastic Birthday Force</div>
        </div>
        <div className="d-flex justify-end">
          <Link to="/jobs">
            <Button basic>Jobs</Button>
          </Link>
        </div>
        <Switch>
          <Route path="/jobs/:name/application">
            <Application />
          </Route>
          <Route path="/jobs/party-performer">
            <PartyPerformerJob />
          </Route>
          <Route path="/jobs/party-manager">
            <PartyManagerJob />
          </Route>
          <Route path="/jobs">
            <JobsListing />
          </Route>
          <Route path="/success">
            <SuccessfulSubmission />
          </Route>
          <Route path="/">
            <JobsListing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
