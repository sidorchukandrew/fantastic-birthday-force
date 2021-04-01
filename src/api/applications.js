import axios from "axios";

export default class ApplicationsApi {
    static postApplication(application) {
        return axios.post(process.env.REACT_APP_API_URL + "/applications", application);
    }
}