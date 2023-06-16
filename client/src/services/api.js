import axios from "axios";

const key = localStorage.getItem("chatUser");
const token = JSON.parse(key);

const Api = axios.create({
  baseURL: `http://localhost:5000/api`,
  headers: {
    Authorization: key ? `Bearer ${token}` : "",
  },
});

export const signupUser = async (data) => {
  try {
    const res = await Api.post(`/users/signup`, data);
    return res.data;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const loginUser = async (data) => {
  try {
    const res = await Api.post(`/users/login`, data);
    return res.data;
  } catch (err) {
    return err.response.data.msg;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await Api.get(`/users`);
    return res.data;
  } catch (err) {
    return err.response.data.msg;
  }
};

export const getAllMyChats = async () => {
  try {
    const res = await Api.get(`/chats`);
    return res.data;
  } catch (err) {
    return err.response.data.msg;
  }
};

export const startSingleChat = async (data) => {
  try {
    const res = await Api.post(`/chats/newchat` , data);
    return res.data;
  } catch (err) {
    return err.response.data.msg;
  }
};
