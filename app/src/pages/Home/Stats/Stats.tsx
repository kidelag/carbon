import React from "react";

import styles from "./Stats.module.scss";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
}

export const Stats: React.FC<Props> = () => {

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
                    <div className={styles.text}>Nombre de connexion</div>
                    <div className={styles.number}>50</div>
                </div>
            </div>
        </div>
    
    </div>
  );
};

export default Stats;
