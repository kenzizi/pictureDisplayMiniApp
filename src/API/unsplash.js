import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 20Xb_mxI0FISmVa7Tman96EHOSgOmD9BpEdfYjpRab4",
  },
});
