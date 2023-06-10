import React from "react";


import styles from "./ClientHomepage.module.scss";
import Button from "@mui/material/Button";
import FormationsWanted from "../../Consultants/ConsultantsProfil/FormationsWanted/FormationsWanted";
import Formations from "../../Formations/Formations";
import MissionsDone from "../../Consultants/ConsultantsProfil/MissionsDone/MissionsDone";
import SalaryEvolution from "../../Consultants/ConsultantsProfil/SalaryEvolution/SalaryEvolution";


interface Props {
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

export const ClientHomepage: React.FC<Props> = () => {

  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <div className={styles.title}>Les profils Carbon au sein de mon entreprise</div>
        <div className={styles.content}>

          <div className={styles.left}>
            <div className={styles.l}>
              <div className={styles.l_top}>Ce que nous faisons</div>
              <div className={styles.l_number}>5</div>
            </div>

            <div className={styles.r}>
              <div className={styles.r_top}>Ce que nous faisons</div>
              <div className={styles.r_number}>5</div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.r_text}>
              Référent commerciale
              <p>Mr. Tobi Rochard</p>
            </div>
            <div className={styles.r_button}>
              <Button variant="contained">Contacter</Button>
            </div>
          </div>

        </div>
      </div>
      

      <div className={styles.middle}>
        <FormationsWanted title={"Ce que nous faisons"} listOfComptencesWanted={[]}/>
        <div className={styles.right}>
          <div className={styles.title}>Notre philosophie</div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi dignissimos, 
            corporis magnam iure doloribus aspernatur sequi ex illum natus voluptas adipisci quasi tempora debitis incidunt minima, 
            consequatur provident quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius molestias ducimus a,
            dolores qui reiciendis fuga at, tenetur tempore, exercitationem iusto similique alias laborum. Obcaecati nihil accusantium odit deserunt!
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.title}>
          Nos dernières actualités
        </div>
        <div className={styles.wrapper}>
          {contentLeft.map((item: any, index: number) => (
            <div className={styles.item} key={index}>

              <div className={styles.l}>
                <div>{item.title}</div>
                <div>{item.date}</div>
              </div>

              <div className={styles.r}>
                A venir
              </div>
            </div>

          ))}
        </div>
      </div>

    </div>
  );
};

export default ClientHomepage;
