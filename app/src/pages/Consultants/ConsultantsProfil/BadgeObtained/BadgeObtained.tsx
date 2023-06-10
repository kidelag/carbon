import React, { useState } from "react";

import styles from "./BadgeObtained.module.scss";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import FormCreateBadge from "../FormCreateBadge";

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
  return (
    <div className={styles.left}>
      <div className={styles.title}>
        Badges
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
      </div>
      <div className={styles.wrapper}>
        {typeBadge === "" && dateBadge === "" ? (
          <p className={styles.no_item}>
            {name} n'a pas reçu de badge pour l'instant
          </p>
        ) : (
          <>
            <img src="https://placehold.co/400" alt="badge" />
            <p>{name} a obtenu :</p>
            <p>
              Badge {typeBadge} le {dateBadge}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BadgeObtained;
