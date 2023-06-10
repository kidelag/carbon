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

import styles from "./MyProfilConsultant.module.scss";
import PersonInfo from "../ConsultantsProfil/PersonInfo/PersonInfo";
import Statistiques from "../ConsultantsProfil/Statistiques/Statistiques";
import BadgeObtained from "../ConsultantsProfil/BadgeObtained/BadgeObtained";
import FormationsObtained from "../ConsultantsProfil/FormationsObtained/FormationsObtained";
import Skills from "../ConsultantsProfil/Skills/Skills";
import MissionsDone from "../ConsultantsProfil/MissionsDone/MissionsDone";
import CustomerOption from "../ConsultantsProfil/CustomerOption/CustomerOption";
import SalaryEvolution from "../ConsultantsProfil/SalaryEvolution/SalaryEvolution";
import FormationsWanted from "../ConsultantsProfil/FormationsWanted/FormationsWanted";
import Engagement from "../ConsultantsProfil/Engagement/Engagement";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCreateMission from "../ConsultantsProfil/FormCreateMission";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUser } from "../../../Redux/States/users";
import { userInfo } from "os";

interface Props {}

interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}
export const MyProfilConsultant: React.FC<Props> = () => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV;

  const params = useParams();
  const userInfo: any = useSelector(fetchUser);

  const [missions, setMissions] = React.useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
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
      const consultantsRaw = await axios
        .get(url + "/consultant/")
        .then((res) => setConsultantInfo(res.data));
      setConsultantInfo((prevConsult: any) =>
        prevConsult.filter((c: any) => c.user_id === userInfo.id)
      );

      const res = await axios.get(url + "/missions");
      if (res?.data.length > 0) {
        console.log(res.data);
        setMissions(res.data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <FormCreateMission
          consultantId={params.id}
          open={openModal}
          onClose={handleCloseModal}
          setAlertMessage={setAlertMessage}
        />

        <div className={styles.wrapper}>
          <PersonInfo
            name={userInfo.userInfo.prenom + " " + userInfo.userInfo.nom}
            coord={consultantInfo.address}
            acutalJob={consultantInfo.position}
            description={consultantInfo.description}
            salary={consultantInfo.salary}
            email={consultantInfo.email}
          />
        </div>

        <div className={styles.wrapper}>
          <BadgeObtained
            name={userInfo.userInfo.nom}
            typeBadge={""}
            dateBadge={""}
            consultantId={params.consultant_id}
          />
          <FormationsObtained listOfFormations={listFormationsConsultant} />
          <Skills listOfCompetences={listCompetencesConsultant} />
        </div>

        <div className={styles.wrapper}>
          <MissionsDone
            missions={missions}
            consultantId={params.consultant_id}
          />
          <SalaryEvolution
            listOfSalaryEvolution={listSalaryEvolutionsConsultant}
          />
          <FormationsWanted
            title={"Souhait de formations"}
            listOfComptencesWanted={listCompetencesWantedConsultant}
          />
        </div>
      </div>
    </>
  );
};

export default MyProfilConsultant;
