import React from "react";

import styles from "./FormationsWanted.module.scss";

import {
  Button,
} from "@mui/material";


interface Props {
  listOfComptencesWanted: object[];
  title: string;
}


const contentMiddle = [
  'Python',
  'C++',
  'Swift',
  'Erlang',
  'Cybersécurité'
]


export const FormationsWanted: React.FC<Props> = ({title, listOfComptencesWanted}) => {

  return (
    <div className={styles.middle}>
      <div className={styles.title}>{title}</div>
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
