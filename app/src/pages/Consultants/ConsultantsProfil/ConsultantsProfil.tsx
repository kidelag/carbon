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

import styles from "./ConsultantsProfil.module.scss"
import PersonInfo from "./PersonInfo/PersonInfo";
import Statistiques from "./Statistiques/Statistiques";
import BadgeObtained from "./BadgeObtained/BadgeObtained";
import FormationsObtained from "./FormationsObtained/FormationsObtained";
import Skills from "./Skills/Skills";
import MissionsDone from "./MissionsDone/MissionsDone";
import CustomerOption from "./CustomerOption/CustomerOption";
import SalaryEvolution from "./SalaryEvolution/SalaryEvolution";
import FormationsWanted from "./FormationsWanted/FormationsWanted"
import Engagement from "./Engagement/Engagement";

interface Props {

}

export const ConsultantsProfil: React.FC<Props> = () => {
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>Franck Durant, développeur web depuis 5 ans</div>

        <div className={styles.wrapper}>
          <PersonInfo/>
        </div>

        <div className={styles.wrapper}>
          <BadgeObtained/>
          <FormationsObtained/>
          <Skills/>
        </div>

        <div className={styles.wrapper}>
          <MissionsDone/>
          <CustomerOption/>
        </div>

        <div className={styles.wrapper}>
          <SalaryEvolution/>
          <FormationsWanted/>
          <Engagement/>
        </div>

        <div className={styles.wrapper_unique}>
          <Statistiques/>
        </div>


      </div>
    </>
  );
};

export default ConsultantsProfil;
