import React from "react";

import styles from "./SalaryEvolution.module.scss";


interface Props {
  listOfSalaryEvolution: object[]
}

const contentLeft = [
  {
    title: "Confirmé",
    date: 2023,
    price: "57"
  },
  {
    title: "Augmentation",
    date: 2022,
    price: "50"
  },
  {
    title: "Junior",
    date: 2021,
    price: "48"
  },
  {
    title: "Entrée en entreprise",
    date: 2020,
    price: "40"
  },
]

export const SalaryEvolution: React.FC<Props> = ({listOfSalaryEvolution}) => {

  return (
    <div className={styles.left}>
      <div className={styles.title}>
        Evolution salariale
      </div>
      <div className={styles.wrapper}>
        {contentLeft.map((item: any, index: number) => (
          <div className={styles.item} key={index}>

            <div className={styles.l}>
              <div>{item.title}</div>
              <div>{item.date}</div>
            </div>

            <div className={styles.r}>
              {item.price}K/an
            </div>
          </div>

        ))}
      </div>

    </div>
  );
};

export default SalaryEvolution;
