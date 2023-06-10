import React, { useState } from "react";
import axios from "axios";

import styles from "./Connection.module.scss";
import LogoCarbon from "../../assets/logo-carbon.png";

import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../utils/login";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface Props {}

const Connection: React.FC<Props> = () => {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  //const [mail, setMail] = useState("e.eniona2@gmail.com");
  //const [pwd, setPwd] = useState("test");
  const [warning, setWarning] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    axios
      .post(url + "/auth/login", {
        email: mail,
        password: pwd,
      })
      .then((res) => {
        login(res, dispatch);
      })
      .catch((err) => {
        try {
          setWarning(err.response.data.message);
        } catch {
          setWarning("Il semble que le serveur soit offline");
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_title}>
        <img src={LogoCarbon} alt="Logo of Carbon" />
        <div className={styles.title}>Heureux de vous revoir sur ATOM !</div>
      </div>
      <div className={styles.form_inputs}>
        <div className={styles.mail}>
          <TextField
            id="standard-mail"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
            sx={{ width: "100%" }}
            label="Email"
            variant="standard"
          />
        </div>

        <div className={styles.password}>
          <TextField
            id="standard-password"
            value={pwd}
            type="password"
            onChange={(event) => setPwd(event.target.value)}
            sx={{ width: "100%" }}
            label="Mot de passe"
            variant="standard"
          />
          {/* <Link to='/'> */}
          <div className={styles.password_forgotten}>Mot de passe oublié ?</div>
          {/* </Link> */}
        </div>
      </div>
      <Stack direction="row">
        <Button
          variant="contained"
          size="large"
          color="success"
          sx={{ margin: "4vh auto 0 auto", alignItems: "center" }}
          onClick={(e) => handleSubmit(e)}
        >
          Connexion
        </Button>
      </Stack>
    </div>
    /*
    <div className={styles.view}>
      <div className={styles.Background}></div>
      <div className={styles.modal}>
        <h1>Identifiez vous</h1>
        {warning.length > 0 ? <h2>{warning}</h2> : null}
        <form onSubmit={handleSubmit} data-warning={warning.length > 0}>
          <input
            type="text"
            placeholder="Mail"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(event) => setPwd(event.target.value)}
          />
          <Button type="submit" appearance="primary">
            Connectez vous
          </Button>
          <Button
            appearance="subtle"
            onClick={() => {
              navigate("/create/account", { replace: true });
            }}
          >
            Créer un compte
          </Button>
        </form>
      </div>
    </div>*/
  );
};

export default Connection;
