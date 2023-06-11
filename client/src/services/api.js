import axios from "axios"

export const googleLoginAccount = async (data) =>{
    try {
        const res = await axios.post(`http://localhost:5000/api/users/login`,data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const allUsers = async () =>{
    try {
        const res = await axios.get(`http://localhost:5000/api/users`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const setConversation = async (data) =>{
    try {
        const res = await axios.post(`http://localhost:5000/api/chats`,data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
export const getConvo = async (data) =>{
    try {
        const res = await axios.post(`http://localhost:5000/api/chats/get`,data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}