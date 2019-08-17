import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 612a7474f78b5d9a71c93b28ee2d1a59342f7aba11911a3afc774638ce17591c"
  }
});

export default instance;
