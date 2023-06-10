import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";

import styles from "./ConsultantsProfil.module.scss";
import PersonInfo from "./PersonInfo/PersonInfo";
import Statistiques from "./Statistiques/Statistiques";
import BadgeObtained from "./BadgeObtained/BadgeObtained";
import FormationsObtained from "./FormationsObtained/FormationsObtained";
import Skills from "./Skills/Skills";
import MissionsDone from "./MissionsDone/MissionsDone";
import CustomerOption from "./CustomerOption/CustomerOption";
import SalaryEvolution from "./SalaryEvolution/SalaryEvolution";
import FormationsWanted from "./FormationsWanted/FormationsWanted";
import Engagement from "./Engagement/Engagement";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCreateMission from "./FormCreateMission";
import { useParams } from "react-router-dom";

interface Props {
}

interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}
export const ConsultantsProfil: React.FC<Props> = () => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const params = useParams();

  const [missions, setMissions] = React.useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = React.useState<any>([]);
  const [consultantInfo, setConsultantInfo] = React.useState<any>([]);
  const [listCompetencesConsultant, setListCompetencesConsultant] = React.useState<object[]>([])
  const [listFormationsConsultant, setListFormationsConsultant] = React.useState<object[]>([])
  const [listSalaryEvolutionsConsultant, setListSalaryEvolutionsConsultant] = React.useState<object[]>([])
  const [listCompetencesWantedConsultant, setListCompetencesWantedConsultant] = React.useState<object[]>([])
  const [listEngagmentsConsultant, setListEngagmentsConsultant] = React.useState<object[]>([])
  const [alertMessage, setAlertMessage] = useState<AlertMessage>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseAlert = () => {
    setAlertMessage({ open: false, message: "", severity: "success" });
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get(url + '/users/' + params.id).then((res) => setUserInfo(res.data)).then(() => console.log(userInfo))
      await axios.get(url + '/consultant/' + params.consultant_id)
                 .then((res) => setConsultantInfo(res.data))

      const res = await axios.get(url + "/missions");
      if (res?.data.length > 0) {
        console.log(res.data);
        setMissions(res.data);
      }
    }
    fetchData();
  }, []);

  const getDateNow: any = new Date()
  const getStartDate: any = new Date(consultantInfo.startDate)

  let date =  (getDateNow - getStartDate) / (1000 * 60 * 60 * 24 * 30.5)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          {userInfo.lastname}, développeur web depuis {date < 12 ? `${Math.trunc(date)} mois` : `${Math.trunc(date)} ans`}
                  </div>

        {/*<Button variant="contained" onClick={handleOpenModal} sx={{margin: '3vh 0 0 5vw'}}>
          Créer un évènement
        </Button>*/}
        <FormCreateMission
          consultantId={params.id }
          open={openModal}
          onClose={handleCloseModal}
          setAlertMessage={setAlertMessage}
        />

        <div className={styles.wrapper}>
          <PersonInfo name={userInfo.firstname+' '+userInfo.lastname} coord={consultantInfo.address} acutalJob={consultantInfo.position} description={consultantInfo.description} salary={consultantInfo.salary} email={consultantInfo.email}/>
        </div>

        <div className={styles.wrapper}>
          <BadgeObtained name={userInfo.lastname} typeBadge={''} dateBadge={''}/>
          <FormationsObtained listOfFormations={listFormationsConsultant}/>
          <Skills listOfCompetences={listCompetencesConsultant}/>
        </div>

        <div className={styles.wrapper}>
          <MissionsDone missions={missions} />
          <CustomerOption missions={missions} />
        </div>

        <div className={styles.wrapper}>
          <SalaryEvolution listOfSalaryEvolution={listSalaryEvolutionsConsultant}/>
          <FormationsWanted listOfComptencesWanted={listCompetencesWantedConsultant}/>
          <Engagement listOfEngagments={listEngagmentsConsultant}/>
        </div>

        <div className={styles.wrapper_unique}>
          <Statistiques />
        </div>
      </div>
    </>
  );
};

export default ConsultantsProfil;
