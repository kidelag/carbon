import React from "react";

import styles from "./BadgeObtained.module.scss";

interface Props {
}

export const BadgeObtained: React.FC<Props> = () => {

  return (
    <div className={styles.left}>
      <div className={styles.title}>Badges</div>
      <div className={styles.wrapper}>
        <img src="https://placehold.co/400" alt="badge" />
        <p>Nicolas DELERME a obtenu :</p>
        <p>Badge Confirmé le 06/06/2023</p>
      </div>
    </div>

  );
};

export default BadgeObtained;
