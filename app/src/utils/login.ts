import axios from "axios";
import { setState } from "../Redux/States/users";

export const login = (res: any, dispatch: any) => {
  console.log("debug", res.data);

  localStorage.setItem("TOKEN", res.data);
  axios.defaults.headers.post["Authorization"] = `Bearer ${res.data}`;
  axios.defaults.headers.delete["Authorization"] = `Bearer ${res.data}`;
  dispatch(
    setState({
      isConnected: true,
      id: res.data.id,
      username: res.data.username,
      accessToken: res.data,
      mail: res.data.mail,
      isAdmin: res.data.isAdmin,
      isValidated: res.data.isValidated,
      isBannished: res.data.isBannished,
      Nom: res.data.Nom,
      Prenom: res.data.Prenom,
    })
  );
};
