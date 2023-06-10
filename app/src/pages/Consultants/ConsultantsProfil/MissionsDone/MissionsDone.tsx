import React, { useEffect } from "react";

import styles from "./MissionsDone.module.scss";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { Typography } from "@mui/material";

interface Props {
  missions: any;
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

export const MissionsDone: React.FC<Props> = ({ missions }) => {
  return (
    <div className={styles.missions}>
      <div className={styles.title}>Missions réalisés</div>
      <div className={styles.wrapper}>
        {missions === null ?
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
        :
          <div className={styles.error}>Il n'y a pas de mission réalisé pour l'instant</div>
        }
      </div>
    </div>
  );
};

export default MissionsDone;
