import React from "react";

import styles from "./Stats.module.scss";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

interface Props {}

export const Stats: React.FC<Props> = () => {
  const [nbClient, setNbClient] = React.useState(0);
  const [nbConnexion, setNbConnexion] = React.useState(0);
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url + "/users/consultants/totals", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      });
      if (res?.data) {
        setNbClient(res.data);
      }

      // Rest of your code handling the response
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Statistiques</div>
      <div className={styles.wrapper}>
        <div className={styles.list_item}>
          <div className={styles.item}>
            <div className={styles.text}>Nombre de connexion</div>
            <div className={styles.number}>50</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text}>Nombre de connexion</div>
            <div className={styles.number}>50</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text}>Nombre de client présente</div>
            <div className={styles.number}>{nbClient}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
