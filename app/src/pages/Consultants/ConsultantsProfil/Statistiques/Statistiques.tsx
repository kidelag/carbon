import React from "react";

import styles from "./Statistiques.module.scss";

import { Divider } from "@mui/material"


interface Props {
}

export const Statistiques: React.FC<Props> = () => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Statistiques
      </div>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <div className={styles.title}>Statistiques globales</div>
          <img src="https://placehold.co/400" alt="Graph left" />
          <div className={styles.left_bottom}>
            <div className={styles.left_bottom_left}>Progression</div>

            <div className={styles.left_bottom_middle}>Efficacité</div>

            <div className={styles.left_bottom_right}>Adapation</div>
          </div>
        </div>

        <Divider orientation="vertical" variant="middle" flexItem />

        <div className={styles.right}>
          <div className={styles.title}>Nombre de challenges réalisés</div>
          <img src="https://placehold.co/400" alt="Graph left" />
          <div className={styles.right_bottom}>
            <div className={styles.right_bottom_right}>Progression</div>

            <div className={styles.right_bottom_middle}>Efficacité</div>

            <div className={styles.right_bottom_right}>Adapation</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Statistiques;
