import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";

import styles from "./ConsultantsProfil.module.scss";
import PersonInfo from "./PersonInfo/PersonInfo";
import Statistiques from "./Statistiques/Statistiques";
import BadgeObtained from "./BadgeObtained/BadgeObtained";
import FormationsObtained from "./FormationsObtained/FormationsObtained";
import Skills from "./Skills/Skills";
import MissionsDone from "./MissionsDone/MissionsDone";
import CustomerOption from "./CustomerOption/CustomerOption";
import SalaryEvolution from "./SalaryEvolution/SalaryEvolution";
import FormationsWanted from "./FormationsWanted/FormationsWanted";
import Engagement from "./Engagement/Engagement";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCreateMission from "./FormCreateMission";
import { useParams } from "react-router-dom";

interface Props {}

interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}
export const ConsultantsProfil: React.FC<Props> = () => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const params = useParams();

  const [missions, setMissions] = React.useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseAlert = () => {
    setAlertMessage({ open: false, message: "", severity: "success" });
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url + "/missions");
      if (res?.data.length > 0) {
        console.log(res.data);
        setMissions(res.data);
      }
    }
    fetchData();
    console.log("test", missions);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          Franck Durant, développeur web depuis 5 ans
        </div>

        <Button variant="contained" onClick={handleOpenModal}>
          Créer un évènement
        </Button>
        <FormCreateMission
          consultantId={params.id}
          open={openModal}
          onClose={handleCloseModal}
          setAlertMessage={setAlertMessage}
        />

        <div className={styles.wrapper}>
          <PersonInfo />
        </div>

        <div className={styles.wrapper}>
          <BadgeObtained />
          <FormationsObtained />
          <Skills />
        </div>

        <div className={styles.wrapper}>
          <MissionsDone missions={missions} />
          <CustomerOption missions={missions} />
        </div>

        <div className={styles.wrapper}>
          <SalaryEvolution />
          <FormationsWanted />
          <Engagement />
        </div>

        <div className={styles.wrapper_unique}>
          <Statistiques consultantId={params.id} />
        </div>
      </div>
    </>
  );
};

export default ConsultantsProfil;
