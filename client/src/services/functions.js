import { loginUser } from "./api"


export const handleLogin =  ({email , password}) =>{
   const data = {
    email:email,
    password:password
   }
   alert("logged"+ email)
}