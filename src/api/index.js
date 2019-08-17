import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 612a7474f78b5d9a71c93b28ee2d1a59342f7aba11911a3afc774638ce17591c"
  }
});

export default instance;

// My Extra: a587cd8018a09d70d9d25ee99657436ddd53cea733e5e338986573fe75dd1080
// Amar: 612a7474f78b5d9a71c93b28ee2d1a59342f7aba11911a3afc774638ce17591c
