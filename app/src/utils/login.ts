import axios from "axios";
import { setState } from "../Redux/States/users";

export const login = (res: any, dispatch: any) => {
  console.log("debug", res.data.token);

  localStorage.setItem("TOKEN", res.data.token);
  axios.defaults.headers.post["Authorization"] = `Bearer ${res.data.token}`;
  axios.defaults.headers.delete["Authorization"] = `Bearer ${res.data.token}`;
  dispatch(
    setState({
      isConnected: true,
      id: res.data.id,
      accessToken: res.data.token,
      isAdmin: res.data.role === "SUPPORT",
      userInfo: res.data.userInfo,
    })
  );
};
