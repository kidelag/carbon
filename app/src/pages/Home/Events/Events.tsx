import React from "react";

import styles from "./Events.module.scss";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
}

export const Events: React.FC<Props> = () => {

  return (
    <div className={styles.container}>
        <div className={styles.title}>Evenements</div>
        <div className={styles.wrapper}>
            <div className={styles.list_item}>
                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Journée d'intégration de Nicolas le boss</div>
                    <div className={styles.when}>A venir</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Journée d'intégration de Nicolas le boss</div>
                    <div className={styles.when}>A venir</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Journée d'intégration de Nicolas le boss</div>
                    <div className={styles.when}>A venir</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}><img src="https://placehold.co/400" alt="Image"/></div>
                    <div className={styles.text}>Journée d'intégration de Nicolas le boss</div>
                    <div className={styles.when}>A venir</div>
                </div>
            </div>
        </div>
    
    </div>
  );
};

export default Events;
