import { loginUser, signupUser, startSingleChat } from "./api";

export const handleSignup = async ({ name, email, password, pic }) => {
  if (!name || !email || !password) {
    return alert("Name , email , password Required");
  }
  let data;
  if (!pic) {
    data = {
      name: name,
      email: email,
      password: password,
    };
  } else {
    data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("pic", pic);
  }
  const res = await signupUser(data);
  if (!res.token) {
    return alert(res);
  }
  alert(res.msg);
  const token = JSON.stringify(res.token.token);
  const key = localStorage.setItem("chatUser", token);
    window.location.replace('/');
};

export const handleLogin = async ({ email, password }) => {
  const data = { email: email, password: password };
  const res = await loginUser(data);
  if (!res.token) {
    return alert(res);
  }
  alert(res.msg);
  const token = JSON.stringify(res.token.token);
  const key = localStorage.setItem("chatUser", token);
  window.location.replace('/');
};

export const handleLogout = () =>{
  localStorage.clear();
  window.location.replace('/');
}

export const handleStartSingleChat = async(id) =>{
  const data = {
    users:[id]
  }
 const res = await startSingleChat(data);
 console.log(res);
}