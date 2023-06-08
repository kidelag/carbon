import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  fetchUser,
  initialState,
  selectUserInfo,
  setState,
} from "../../Redux/States/users";

import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
  Profile,
} from "@atlaskit/atlassian-navigation";
import { AtlassianIcon } from "@atlaskit/logo";
import Avatar from "@atlaskit/avatar";
import Badge from "@atlaskit/badge";
import Popup from "@atlaskit/popup";
import EmptyState from "@atlaskit/empty-state";
import { ButtonItem, MenuGroup, Section } from "@atlaskit/menu";

import styles from "./Base.module.scss";
import Connection from "../../pages/Connection/Connection";
import Menu from "./Menu/Menu";

interface Props {
  checkingToken: boolean;
  children: React.ReactNode;
  page?: string;
}

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL_PROD
    : process.env.REACT_APP_URL_DEV;

export const Base: React.FC<Props> = ({ checkingToken, page, children }) => {
  const [isModalConnectionShown, setIsModalConnectionShown] =
    useState<boolean>(true);
  const [isPopupProfilOpen, setIsPopupSettingsOpen] = useState<boolean>(false);

  const user = useSelector(fetchUser);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const params = new URLSearchParams(document.location.search);
  const mailParams = params.get("mailValid");

  useEffect(() => {
    setIsModalConnectionShown(!user.isConnected);
  }, [user.isConnected, mailParams]);

  const AtlassianProductHome = () => (
    <ProductHome
      icon={AtlassianIcon}
      logo={AtlassianIcon}
      siteTitle={"VPlanner"}
      onClick={() => {
        navigate("/", { replace: true });
      }}
    />
  );


  const navButtons: JSX.Element[] = [];

  const navButtonsAdmins: JSX.Element[] = user.isAdmin ? [] : [];

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    setIsPopupSettingsOpen(false);

    dispatch(setState(initialState));
  };

  return (
    <>
      <div className={styles.container}>
        {checkingToken ? (
          <div className={styles.checkingToken}>
            <div>
              Nous sommes entrains de vérifier l&#39;état de votre connexion
            </div>
            <div>Cela peut prendre quelques secondes</div>
          </div>
        ) : isModalConnectionShown ? (
          <Connection />
        ) : (
          <>
            <div className={styles.navBar}>
              <Menu page={page}/>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.main}>{children}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Base;
