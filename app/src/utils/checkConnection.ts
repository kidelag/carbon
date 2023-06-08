import axios from "axios";
import { initialState } from "../Redux/States/users";

interface res {
  isConnected: boolean;
  id: number;
  isAdmin: boolean;
  role: string;
  exp: number;
  userInfo: {
    nom: string;
    prenom: string;
    email: string;
    salary: number;
    tjm: number;
    tel: number;
    address: string;
  };
}

export const validate: () => Promise<res> = () => {
  const token = localStorage.getItem("TOKEN");

  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  return new Promise((succes, fail) => {
    if (token) {
      axios
        .post(url + "/auth/validateToken", {
          token: token,
        })
        .then((res) => {
          succes(res.data);
        })
        .catch(() => {
          fail(initialState);
        });
    } else {
      fail(initialState);
    }
  });
};

export default validate;
