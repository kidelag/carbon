import React from "react";

import styles from "./Skills.module.scss";

import {
  Button,
} from "@mui/material";
import Rating from '@mui/material/Rating';
import { Javascript } from "@mui/icons-material";


const contentRight = [
  {
    name : 'Javascript',
    rating: 2,
  },
  {
    name : 'PHP',
    rating: 5,
  },
  {
    name : 'NodeJS',
    rating: 1,
  },
  {
    name : 'NestJS',
    rating: 0,
  },
  {
    name : 'HTML',
    rating: 5,
  }
]


interface Props {
}

export const Skills: React.FC<Props> = () => {

  return (

      <div className={styles.right}>
        <div className={styles.title}>Compétences</div>
        <div className={styles.list_languages}>

          {contentRight.map((item, index) => (
            <div className={styles.item} key={index}>
              <Button variant="contained" color="success">{item.name}</Button>
              <Rating name="read-only" value={item.rating} readOnly />
            </div>
          ))}
        </div>

      </div>
  );
};

export default Skills;
