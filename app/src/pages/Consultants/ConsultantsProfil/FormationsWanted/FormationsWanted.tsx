import React from "react";

import styles from "./FormationsWanted.module.scss";

import {
  Button,
} from "@mui/material";


interface Props {
  listOfComptencesWanted: object[]
}


const contentMiddle = [
  'Python',
  'C++',
  'Swift',
  'Erlang',
  'Cybersécurité'
]


export const FormationsWanted: React.FC<Props> = ({listOfComptencesWanted}) => {

  return (
    <div className={styles.middle}>
      <div className={styles.title}>Souhait de formations</div>
      <div className={styles.list_languages}>
        {contentMiddle.map((item: any, index: number) => (
          <div className={styles.item} key={index}>
            <Button variant="contained" color="warning">{item}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationsWanted;
