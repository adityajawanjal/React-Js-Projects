import axios from "axios";

const key = localStorage.getItem("chatUser");
const token = JSON.parse(key);

const Api = axios.create({
  baseURL: `http://localhost:5000/api`,
  headers: {
    Authorization: key ? `Bearer ${token}` : "",
  },
});


