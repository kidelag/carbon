import React from "react";
import styles from './ConultantHomePage.module.scss'
import { useSelector } from "react-redux";

import PersonInfo from "../ConsultantsProfil/PersonInfo/PersonInfo";
import BadgeObtained from "../ConsultantsProfil/BadgeObtained/BadgeObtained";
import {
  fetchUser,
} from "../../../Redux/States/users";

interface Props {}

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL_PROD
    : process.env.REACT_APP_URL_DEV;

export const ConultantHomePage: React.FC<Props> = () => {
  const [userInfo, setUserInfo] = React.useState<any>([]);
  const user = useSelector(fetchUser);



  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.img}>
          <img src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="image of the person" />
          </div>
          <div className={styles.presence}>
            <div className={styles.title}>Présence en entreprise</div>

            <div className={styles.cont}>
              <div className={styles.left}>
                <div className={styles.text}>Nombre d'absence</div>
                <div className={styles.number}>0</div>
              </div>

              <div className={styles.right}>
                <div className={styles.text}>Nombre de CP</div>
                <div className={styles.number}>42</div>
              </div>

            </div>
          </div>

        </div>
        <div className={styles.wrapper}>
        <div className={styles.news}>
            <div className={styles.title}>Présence en entreprise</div>

            <div className={styles.cont}>
                <div className={styles.content}>Il n'y a pas d'actualité pour le moment </div>
            </div>

          </div>
          <BadgeObtained name={'TODO'} typeBadge={''} dateBadge={''}/>
        </div>
    </div>
  );
};

export default ConultantHomePage;
