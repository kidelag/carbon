import React from "react";

import styles from "./PersonInfo.module.scss";


interface Props {
  name: string,
  coord: string,
  acutalJob: string,
  description: string,
  salary: number,
  email: string,
}

export const PersonInfo: React.FC<Props> = ({name, coord, acutalJob, description, salary, email}) => {

  return (
    <div className={styles.profil_top}>
        <div className={styles.profil_img}>
          <img src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="image of the person" />
        </div>
        <div className={styles.about}>
          <div className={styles.first}>
              <div className={styles.coord}>
                <p>Coordonnées</p>
                  {coord === null || coord === '' ? "Il n'y a pas de coordonnées" : coord}
                <br />
                  {email === null || email === '' ? "Il n'y a pas d'email" : email}
              </div>
              <div className={styles.coord}>
              <p>{name} en quelques mots</p>
              {description === null || description === '' ? "Il n'y a pas de description" : description}
          </div>
        </div>
        
        <div className={styles.second}>
            <div className={styles.coord}>
            <p>Mission actuelle</p>
              {acutalJob === null || acutalJob === '' ? "Il n'y a pas de mission actuel" : acutalJob}
            </div>
            <div className={styles.coord}>
            <p>Salaire actuel</p>
              {salary}K brut/an
            </div>
        </div>

        

        </div>

    </div>
  );
};

export default PersonInfo;
