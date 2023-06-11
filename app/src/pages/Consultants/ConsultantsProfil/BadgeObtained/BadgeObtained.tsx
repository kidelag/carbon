import React, { useEffect, useState } from "react";

import styles from "./BadgeObtained.module.scss";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import FormCreateBadge from "../FormCreateBadge";
import { useSelector } from "react-redux";
import { fetchUser } from "../../../../Redux/States/users";
import badge1 from "../../../../assets/badges/1.png";
import badge2 from "../../../../assets/badges/2.png";
import badge3 from "../../../../assets/badges/3.png";
import badge4 from "../../../../assets/badges/4.png";
import { set } from "immer/dist/internal";

interface Props {
  name: string;
  typeBadge: string;
  dateBadge: string;
  consultantId: string | undefined;
}
interface AlertMessage {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export const BadgeObtained: React.FC<Props> = ({
  name,
  typeBadge,
  dateBadge,
  consultantId,
}) => {
  const isAdmin = useSelector(fetchUser).isAdmin;
  const [badgeImage, setBadgeImage] = useState("");
  const [badgeColor, setBadgeColor] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
    switch (typeBadge.toLowerCase()) {
      case "proton":
        setBadgeImage(badge1);
        setBadgeColor("#e53f49");

        break;
      case "neutron":
        setBadgeImage(badge2);
        setBadgeColor("#e53f49");
        break;
      case "electron":
        setBadgeImage(badge3);
        setBadgeColor("#e53f49");
        break;
      case "Fusion":
        setBadgeImage(badge4);
        setBadgeColor("#17bb7b");
        break;
    }
  }, [typeBadge]);

  return (
    <div className={styles.left}>
      <div className={styles.title}>
        Badges
        {isAdmin && (
          <>
            <IconButton
              onClick={handleOpenModal}
              color="primary"
              size="small"
              sx={{ backgroundColor: "#e53f4940" }}
            >
              <Add sx={{ fontSize: "35px" }} />
            </IconButton>
            <FormCreateBadge
              consultantId={consultantId}
              open={openModal}
              onClose={handleCloseModal}
              setAlertMessage={setAlertMessage}
            />
          </>
        )}
      </div>
      <div className={styles.wrapper}>
        {typeBadge === "" && dateBadge === "" ? (
          <p className={styles.no_item}>
            {name} n'a pas reçu de badge pour l'instant
          </p>
        ) : (
          <>
            <img src={badgeImage} alt={typeBadge} />
            <p>{name} a obtenu :</p>
            <p>
              Badge{" "}
              <span style={{ color: badgeColor, fontWeight: "bold" }}>
                {typeBadge}
              </span>{" "}
              le {dateBadge}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BadgeObtained;
