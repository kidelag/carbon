import React from "react";

import styles from "./Engagement.module.scss";

import {
  Button,
} from "@mui/material";


interface Props {
  listOfEngagments: object[]
}


const contentRight = [
  "Nico a reçu le bdage expert",
  "Nico a reçu le badge confirmé",
  "Nico a reçu le bage sénior",
  "Nico a reçu le badge junior",
]

export const Engagement: React.FC<Props> = ({listOfEngagments}) => {

  return (
    <div className={styles.right}>
      <div className={styles.title}>
          Implication vie Carbon
        </div>
        <div className={styles.wrapper}>
          {contentRight.map((item: any, index: number) => (
            <div className={styles.item} key={index}>
                <div>{item}</div>
            </div>
          ))}
        </div>
    </div>  
  );
};

export default Engagement;
