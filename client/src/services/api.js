import axios from "axios";

const key = localStorage.getItem('chatUser');
const token = JSON.parse(key);

const Api = axios.create({
    baseURL:`http://localhost:5000/api`,
    
});

export const loginUser = async(data)=>{
    try {
        const res = await axios.post(`http://localhost:5000/api/users/login` ,data);
        return res.data;
    } catch (err) {
        return err;
    }
}