import React from "react";

import styles from "./CustomerOption.module.scss";
import Rating from "@mui/material/Rating";

interface Props {
  missions: any;
}

export const CustomerOption: React.FC<Props> = ({ missions }) => {
  const MissionsReview = missions.filter(
    (mission: any) => mission.clientReview || mission.clientRating
  );

  return (
    <div className={styles.avis}>
      <div className={styles.title}>Avis clients</div>
      <div className={styles.wrapper}>
        {MissionsReview.map((mission: any) => (
          <div className={styles.item}>
            <img src="https://placehold.co/200" alt="" />
            {mission.clientReview && (
              <>
                {" "}
                <p>Commentaire</p>
                <p>{mission.clientReview}</p>
              </>
            )}

            {mission.clientRating && (
              <>
                {" "}
                <p>Note</p>
                <Rating
                  name="read-only"
                  value={mission.clientRating}
                  readOnly
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerOption;
