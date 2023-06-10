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
  
  import styles from "./ClientProfil.module.scss";
  import PersonInfo from "../../Consultants/ConsultantsProfil/PersonInfo/PersonInfo";
  import Statistiques from "../../Consultants/ConsultantsProfil/Statistiques/Statistiques";
  import BadgeObtained from "../../Consultants/ConsultantsProfil/BadgeObtained/BadgeObtained";
  import FormationsObtained from "../../Consultants/ConsultantsProfil/FormationsObtained/FormationsObtained";
  import Skills from "../../Consultants/ConsultantsProfil/Skills/Skills";
  import MissionsDone from "../../Consultants/ConsultantsProfil/MissionsDone/MissionsDone";
  import CustomerOption from "../../Consultants/ConsultantsProfil/CustomerOption/CustomerOption";
  import SalaryEvolution from "../../Consultants/ConsultantsProfil/SalaryEvolution/SalaryEvolution";

  import FormationsWanted from "../../Consultants/ConsultantsProfil/FormationsWanted/FormationsWanted";

  import Engagement from "../../Consultants/ConsultantsProfil/Engagement/Engagement";
  import React, { useEffect, useState } from "react"; 
  import axios from "axios";
  import FormCreateMission from "../../Consultants/ConsultantsProfil/FormCreateMission";
  import { useParams } from "react-router-dom";
  import { useSelector } from "react-redux";
  import { fetchUser } from "../../../Redux/States/users";
import { userInfo } from "os";
  
  interface Props {
  }
  
  interface AlertMessage {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error" | undefined;
  }
  export const CLientProfil: React.FC<Props> = () => {
    const url =
      process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_URL_PROD
        : process.env.REACT_APP_URL_DEV;
  
    const params = useParams();
    const userInfo: any = useSelector(fetchUser);
  
    const [missions, setMissions] = React.useState<any>([]);
    const [openModal, setOpenModal] = useState(false);
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
        const consultantsRaw = await axios.get(url + '/consultant/').then((res) => setConsultantInfo(res.data));
        setConsultantInfo((prevConsult: any) => prevConsult.filter((c: any) => c.user_id === userInfo.id))

        
  
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
            consultantId={params.id }
            open={openModal}
            onClose={handleCloseModal}
            setAlertMessage={setAlertMessage}
          />
  
          <div className={styles.wrapper}>
            
          </div>
  
          <div className={styles.wrapper}>
            <BadgeObtained name={userInfo.userInfo.nom} typeBadge={''} dateBadge={''}/>
            <FormationsObtained listOfFormations={listFormationsConsultant}/>
            <Skills listOfCompetences={listCompetencesConsultant}/>
          </div>
  
          <div className={styles.wrapper}>
            <MissionsDone missions={missions} />
            <SalaryEvolution listOfSalaryEvolution={listSalaryEvolutionsConsultant}/>
            <FormationsWanted title={"Compétences requises"} listOfComptencesWanted={listCompetencesWantedConsultant}/>
          </div>
        </div>
      </>
    );
  };
  
  export default CLientProfil;
  