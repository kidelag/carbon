import React from "react";

import styles from "./MissionsDone.module.scss";
import Rating from '@mui/material/Rating';

interface Props {
}

export const MissionsDone: React.FC<Props> = () => {

  return (
    <div className={styles.missions}>
      <div className={styles.title}>Missions réalisés</div>
      <div className={styles.wrapper}>
        <div className={styles.item}>
            Carrefour, Durée 15 mois, Développeur web
        </div>
        <div className={styles.item}>
            L'Oreal, Durée 5 mois, Développeur web
        </div>
        <div className={styles.item}>
            Mondial Auto, Durée 24 mois, Développeur web
        </div>
      </div>
    </div>

  );
};

export default MissionsDone;
