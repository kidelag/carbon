import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Base from "./shared/Base/Base";
import { fetchUser, setState } from "./Redux/States/users";
import { validate } from "./utils/checkConnection";

import CreateAccount from "./pages/CreateAccount/CreateAccount";
import Home from "./pages/Home/Home";
import SideBarProfil from "./pages/SideBarProfil/SideBarProfil";
import UserProfil from "./pages/UserProfil/UserProfil";

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL_PROD
    : process.env.REACT_APP_URL_DEV;

export const App = () => {
  const [checkingToken, setCheckingToken] = useState<boolean>(true);

  const dispatch = useDispatch();

  const userConnected = useSelector(fetchUser);

  useEffect(() => {
    validate()
      .then((data) => {
        axios.defaults.headers.post["Authorization"] = `Bearer ${
          localStorage.getItem("TOKEN") || ""
        }`;
        axios.defaults.headers.put["Authorization"] = `Bearer ${
          localStorage.getItem("TOKEN") || ""
        }`;
        axios.defaults.headers.delete["Authorization"] = `Bearer ${
          localStorage.getItem("TOKEN") || ""
        }`;

        dispatch(
          setState({
            isConnected: data.isConnected,
            id: data.id,
            username: data.username,
            mail: data.mail,
            accessToken: localStorage.getItem("TOKEN") || "",
            isAdmin: data.isAdmin,
            isValidated: data.isValidated,
            isBannished: data.isBannished,
            Nom: data.Nom,
            Prenom: data.Prenom,
          })
        );

        setCheckingToken(false);
      })
      .catch((data) => {
        dispatch(
          setState({
            isConnected: data.isConnected,
            id: data.id,
            username: data.username,
            mail: data.mail,
            accessToken: localStorage.getItem("TOKEN") || "",
            isAdmin: data.isAdmin,
            isValidated: data.isValidated,
            isBannished: data.isBannished,
            Nom: data.Nom,
            Prenom: data.Prenom,
          })
        );

        setCheckingToken(false);
      });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Base checkingToken={checkingToken}>
                <Home />
              </Base>
            </>
          }
        />
        <Route
          path="/create/account"
          element={
            <>
              <CreateAccount />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Base checkingToken={checkingToken}>
                <div style={{ display: "flex" }}>
                  <SideBarProfil page="info perso" />
                  <UserProfil />
                </div>
              </Base>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
