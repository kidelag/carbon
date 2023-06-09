import React from "react";

import styles from "./FormationsWanted.module.scss";

import {
  Button,
} from "@mui/material";


interface Props {
}


const contentMiddle = [
  'Python',
  'C++',
  'Swift',
  'Erlang',
  'Cybersécurité'
]


export const Fourthline: React.FC<Props> = () => {

  return (
    <div className={styles.middle}>
      <div className={styles.title}>Compétences</div>
      <div className={styles.list_languages}>
        {contentMiddle.map((item, index) => (
          <div className={styles.item} key={index}>
            <Button variant="contained" color="warning">{item}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourthline;
