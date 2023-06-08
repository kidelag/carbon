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
import ConsultantCatalog from "./pages/Consultants/ConsultantCatalog/ConsultantCatalog";
import { ThemeProvider, createTheme } from "@mui/material";
import CreateConsultant from "./pages/CreateConsultant/CreateConsultant";
import ConsultantsProfil from "./pages/Consultants/ConsultantsProfil/ConsultantsProfil";
import Formations from "./pages/Formations/Formations";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E53F49",
    },
    secondary: {
      main: "#00BB7E",
    },
  },
});
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
            accessToken: localStorage.getItem("TOKEN") || "",
            role: data.role,
            isAdmin: data.isAdmin,
            userInfo: data.userInfo,
          })
        );

        setCheckingToken(false);
      })
      .catch((data) => {
        dispatch(
          setState({
            isConnected: data.isConnected,
            id: data.id,
            accessToken: localStorage.getItem("TOKEN") || "",
            role: data.role,
            isAdmin: data.isAdmin,
            userInfo: data.userInfo,
          })
        );

        setCheckingToken(false);
      });
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
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
            path="/consultants"
            element={
              <>
                <Base checkingToken={checkingToken} page="Consultants">
                  <ConsultantCatalog />
                </Base>
              </>
            }
          />
          <Route
            path="/formations"
            element={
              <>
                <Base checkingToken={checkingToken} page="Formations">
                  <Formations />
                </Base>
              </>
            }
          />
          <Route
            path="/consultants/profil/:id"
            element={
              <>
                <Base checkingToken={checkingToken} page="Consultants">
                  <ConsultantsProfil />
                </Base>
              </>
            }
          />
          <Route
            path="/consultants/create"
            element={
              <>
                <Base checkingToken={checkingToken} page="Catalogue">
                  <CreateConsultant />
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
                <Base checkingToken={checkingToken} page="Profil">
                  <div style={{ display: "flex" }}>
                    <SideBarProfil page="info perso" />
                    <UserProfil />
                  </div>
                </Base>
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
