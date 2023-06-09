import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Rating from '@mui/material/Rating';

import { useEffect, useState } from "react";
import styles from './ConsultantsProfil.module.scss'
import Events from "../../Home/Events/Events";

interface Props {

}

export const ConsultantsProfil: React.FC<Props> = () => {
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>Franck Durant, développeur web depuis 5 ans</div>

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

        <div className={styles.profil_second_line}>
          <div className={styles.progress}>
            <div className={styles.title}>Badges</div>
            <div className={styles.wrapper}>
              <img src="https://placehold.co/400" alt="badge" />
              <p>Nicolas DELERME a obtenu :</p>
              <p>Badge Confirmé le 06/06/2023</p>
            </div>
          </div>


          <div className={styles.formation}>
            <div className={styles.title}>Formations</div>
            <div className={styles.content}>
              <div className={styles.item}>
                <p>Javascript</p>
                <p>Résultat: Admis</p>
              </div>
              <div className={styles.item}>
                <p>Javascript</p>
                <p>Résultat: Admis</p>
              </div>
              <div className={styles.item}>
                <p>Javascript</p>
                <p>Résultat: Admis</p>
              </div>
              <div className={styles.item}>
                <p>Javascript</p>
                <p>Résultat: Admis</p>
              </div>

            </div>
            

          </div>

          <div className={styles.wrapper}>
            <div className={styles.title}>Compétences</div>
            <div className={styles.list_languages}>

              <div className={styles.item}>
                <Button variant="contained" color="success">Javascript</Button>
                <Rating name="read-only" value={5} readOnly />
              </div>

              <div className={styles.item}>
                <Button variant="contained" color="success">PHP</Button>
                <Rating name="read-only" value={1} readOnly />
              </div>

              <div className={styles.item}>
                <Button variant="contained" color="success">HTML</Button>
                <Rating name="read-only" value={5} readOnly />
              </div>

              <div className={styles.item}>
                <Button variant="contained" color="success">CSS</Button>
                <Rating name="read-only" value={2} readOnly />
              </div>

              <div className={styles.item}>
                <Button variant="contained" color="success">VueJS</Button>
                <Rating name="read-only" value={3} readOnly />
              </div>

              <div className={styles.item}>
                <Button variant="contained" color="success">NestJS</Button>
                <Rating name="read-only" value={1} readOnly />
              </div>

            </div>

          </div>
        </div>

        <div className={styles.thrid_line}>
          <div className={styles.missions}>
            <div className={styles.title}>Missions réalisés</div>
            <div className={styles.wrapper}>
              <div className={styles.item}>
                  Carrefour, Durée 15 mois, Développeur web
              </div>
              <div className={styles.item}>
                  L'Oreal, Durée 5 mois, Développeur web
              </div>
              <div className={styles.item}>
                  Mondial Auto, Durée 24 mois, Développeur web
              </div>
            </div>
          </div>

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

        </div>

      </div>
    </>
  );
};

export default ConsultantsProfil;
