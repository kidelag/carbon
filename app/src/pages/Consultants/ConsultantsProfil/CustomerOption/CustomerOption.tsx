import React from "react";

import styles from "./CustomerOption.module.scss";
import Rating from '@mui/material/Rating';

interface Props {
}

export const CustomerOption: React.FC<Props> = () => {

  return (

    <div className={styles.avis}>
      <div className={styles.title}>Avis clients</div>
      <div className={styles.wrapper}>
        <div className={styles.item}>
            <img src="https://placehold.co/200" alt="" />
            <p>Commentaire</p>
            <p>Très bon développeur, une crème</p>
            <p>Note</p>
            <Rating name="read-only" value={5} readOnly />
        </div>
        <div className={styles.item}>
            <img src="https://placehold.co/200" alt="" />
            <p>Commentaire</p>
            <p>Très bon développeur, une crème</p>
            <p>Note</p>
            <Rating name="read-only" value={5} readOnly />
        </div>
      </div>
    </div>
  );
};

export default CustomerOption;
