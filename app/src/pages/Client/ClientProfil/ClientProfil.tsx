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
    console.log(userInfo.id)
  
    const [missions, setMissions] = React.useState<any>([]);
    const [openModal, setOpenModal] = useState(false);
    const [clientInfo, setClientInfo] = React.useState<any>([]);
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
        await axios.get(url + '/entreprise').then((res) => console.log(res.data));
        setClientInfo((prevConsult: any) => prevConsult.filter((c: any) => c.user_id === userInfo.id))
      }
      fetchData();
    }, []);

    useEffect(() => {
      console.log(clientInfo)
    }, [userInfo])
  
    
  
    return (
      <>
        <div className={styles.container}>
  
          <div className={styles.wrapper}>
            <div className={styles.right}>
              <div className={styles.title}>Carrefour Market</div>
              <div className={styles.content}>
                <div className={styles.c_t}>Carrefour</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi dignissimos, 
                corporis magnam iure doloribus aspernatur sequi ex illum natus voluptas adipisci quasi tempora debitis incidunt minima, 
                consequatur provident quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius molestias ducimus a,
                dolores qui reiciendis fuga at, tenetur tempore, exercitationem iusto similique alias laborum. Obcaecati nihil accusantium odit deserunt!
              </div>
            </div>
          </div>
  
          <div className={styles.wrapper}>
          <div className={styles.right}>
              <div className={styles.title}>Mission proposée</div>
              <div className={styles.content}>
                <p>
                  <span className={styles.c_l}>Description du poste :</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi dignissimos, 
                  corporis magnam iure doloribus aspernatur sequi ex illum natus voluptas a Obcaecati nihil accusantium odit deserunt!
                </p>
                <p>
                  <span className={styles.c_l}>Durée :</span>
                </p>
                <p>18 mois</p>
                <p>
                  <span className={styles.c_l}>Salaire Brut :</span>
                </p>
                <p>55K</p>
              </div>
            </div>
            <FormationsWanted title={"Compétences requises"} listOfComptencesWanted={clientInfo.wantedCompetences}/>
          </div>
        </div>
      </>
    );
  };
  
  export default CLientProfil;
  