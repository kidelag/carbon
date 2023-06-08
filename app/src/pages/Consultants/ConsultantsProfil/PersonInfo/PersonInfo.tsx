import React from "react";

import styles from "./PersonInfo.module.scss";


interface Props {
}

export const PersonInfo: React.FC<Props> = () => {

  return (
    <div className={styles.profil_top}>
        <div className={styles.profil_img}>
          <img src="https://placehold.co/400" alt="image of the person" />
        </div>
        <div className={styles.about}>
          <div className={styles.first}>
              <div className={styles.coord}>
                <p>Coordonnées</p>
                34 rue de la Porte, Villejuif 94800
                <br />
                nicodelerme@gmail.com
              </div>
              <div className={styles.coord}>
              <p>Nico en quelques mots</p>
              Développeur full-stack, je peux vous accompagner dans l'intégration
              des étapes de projets web. De l'intégration, au développement des fonctionnalités poussées
          </div>
        </div>
        
        <div className={styles.second}>
            <div className={styles.coord}>
            <p>Mission actuelle</p>
            EDF: 18 mois
            </div>
            <div className={styles.coord}>
            <p>Salaire actuel</p>
            57K brut
            </div>
        </div>

        

        </div>

    </div>
  );
};

export default PersonInfo;
