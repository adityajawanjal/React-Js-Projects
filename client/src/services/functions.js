import { login, signup } from "./api";

export const handleSignUp = async (e) => {
  try {
    const data = {
      name: e.name,
      email: e.email,
      password: e.password,
      pic: e.pic,
    };
    const res = await signup(data);
    if (!res.token) {
      alert(res.msg);
    }
    localStorage.setItem("chatUser", JSON.stringify(res.token.token));
    alert(res.msg);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const handleLogin = async (e) => {
  try {
    const data = {
      email: e.email,
      password: e.password,
    };
    const res = await login(data);
    if (!res.token) {
      alert(res.msg);
    }
    localStorage.setItem("chatUser", JSON.stringify(res.token.token));
    alert(res.msg);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const handleLogout = () =>{
    try {
      localStorage.clear();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
}