import React, { useEffect, useState } from "react";

import styles from "./MissionsDone.module.scss";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { Button, IconButton, Typography } from "@mui/material";
import FormCreateMission from "../FormCreateMission";
import { Add } from "@mui/icons-material";

interface Props {
  missions: any;
  consultantId: string | undefined;
}
interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const calculateDuration = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  const durationInMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  return durationInMonths;
};

export const MissionsDone: React.FC<Props> = ({ missions, consultantId }) => {
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

  console.log("missions", missions);
  return (
    <div className={styles.missions}>
      <div className={styles.title}>
        Missions réalisés
        <IconButton
          onClick={handleOpenModal}
          color="primary"
          size="small"
          sx={{ backgroundColor: "#e53f4940" }}
        >
          <Add sx={{ fontSize: "35px" }} />
        </IconButton>
        {/* <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{ margin: "3vh 0 0 5vw" }}
        >
          Attribution de mission
        </Button> */}
        <FormCreateMission
          consultantId={consultantId}
          open={openModal}
          onClose={handleCloseModal}
          setAlertMessage={setAlertMessage}
        />
      </div>
      <div className={styles.wrapper}>
        {missions.length > 0 ? (
          missions.map((mission: any) => (
            <div className={styles.item}>
              <span style={{ textTransform: "uppercase" }}>
                {mission.company}
              </span>
              {`, Durée ${calculateDuration(
                mission.startDate,
                mission.endDate
              )} mois,${mission.title}`}
            </div>
          ))
        ) : (
          <div className={styles.error}>
            Il n'y a pas de mission réalisé pour l'instant
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionsDone;
