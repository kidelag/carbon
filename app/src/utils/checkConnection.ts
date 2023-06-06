import axios from "axios";

interface res {
  isConnected: boolean;
  id: number;
  isAdmin: boolean;
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
          fail({
            isConnected: false,
            id: 0,
            isAdmin: false,
            exp: 0,
            userInfo: {
              email: "",
              nom: "",
              prenom: "",
              salary: 0,
              tjm: 0,
              tel: 0,
              address: "",
            },
          });
        });
    } else {
      fail({
        isConnected: false,
        id: 0,
        isAdmin: false,
        exp: 0,
        userInfo: {
          email: "",
          nom: "",
          prenom: "",
          salary: 0,
          tjm: 0,
          tel: 0,
          address: "",
        },
      });
    }
  });
};

export default validate;
