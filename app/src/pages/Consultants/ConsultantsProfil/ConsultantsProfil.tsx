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
import { fetchUser } from "../../../Redux/States/users";
import { useSelector } from "react-redux";

interface Props {}

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

  const isAdmin = useSelector(fetchUser).isAdmin;
  const params = useParams();

  const [missions, setMissions] = React.useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = React.useState<any>([]);
  const [consultantInfo, setConsultantInfo] = React.useState<any>([]);
  const [listCompetencesConsultant, setListCompetencesConsultant] =
    React.useState<object[]>([]);
  const [listFormationsConsultant, setListFormationsConsultant] =
    React.useState<object[]>([]);
  const [listSalaryEvolutionsConsultant, setListSalaryEvolutionsConsultant] =
    React.useState<object[]>([]);
  const [listCompetencesWantedConsultant, setListCompetencesWantedConsultant] =
    React.useState<object[]>([]);
  const [listEngagmentsConsultant, setListEngagmentsConsultant] =
    React.useState<object[]>([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + "/users/" + params.id)
        .then((res) => setUserInfo(res.data))
        .then(() => console.log(userInfo));
      await axios
        .get(url + "/consultant/" + params.consultant_id)
        .then((res) => setConsultantInfo(res.data));

      const res = await axios.get(url + "/missions");
      if (res?.data.length > 0) {
        setMissions(res.data);
      }
    }
    fetchData();
  }, []);

  const getDateNow: any = new Date();
  const getStartDate: any = new Date(consultantInfo.startDate);

  let date = (getDateNow - getStartDate) / (1000 * 60 * 60 * 24 * 30.5);

  const nameToShow = isAdmin
    ? userInfo.firstname + " " + userInfo.lastname
    : userInfo.firstname;

  let durationText;
  console.log(date);
  if (date < 1) {
    durationText = "moins d'un mois";
  } else if (date < 12) {
    durationText = `${Math.trunc(date)} mois`;
  } else {
    durationText = `${Math.trunc(date / 12)} ans`;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          {`${nameToShow}, développeur web depuis ${durationText}`}
        </div>

        <div className={styles.wrapper}>
          <PersonInfo
            name={nameToShow}
            coord={consultantInfo.address}
            acutalJob={consultantInfo.position}
            description={consultantInfo.description}
            salary={consultantInfo.salary}
            email={consultantInfo.email}
          />
        </div>

        <div className={styles.wrapper}>
          <BadgeObtained name={nameToShow} typeBadge={""} dateBadge={""} />
          <FormationsObtained listOfFormations={listFormationsConsultant} />
          <Skills listOfCompetences={listCompetencesConsultant} />
        </div>

        <div className={styles.wrapper}>
          <MissionsDone
            missions={missions}
            consultantId={params.consultant_id}
          />
          <CustomerOption missions={missions} />
        </div>

        <div className={styles.wrapper}>
          <SalaryEvolution
            listOfSalaryEvolution={listSalaryEvolutionsConsultant}
          />
          <FormationsWanted
            listOfComptencesWanted={listCompetencesWantedConsultant}
          />
          <Engagement listOfEngagments={listEngagmentsConsultant} />
        </div>

        <div className={styles.wrapper_unique}>
          <Statistiques consultantId={params.id} />
        </div>
      </div>
    </>
  );
};

export default ConsultantsProfil;
