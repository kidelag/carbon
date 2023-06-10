import React from "react";

import styles from "./BadgeObtained.module.scss";

interface Props {
  name: string,
  typeBadge: string,
  dateBadge : string,

}

export const BadgeObtained: React.FC<Props> = ({name, typeBadge, dateBadge}) => {

  return (
    <div className={styles.left}>
      <div className={styles.title}>Badges</div>
      <div className={styles.wrapper}>
        { typeBadge === '' && dateBadge === '' ?

          <p className={styles.no_item}>{name} n'a pas reçu de badge pour l'instant</p>

        :
          <>
            <img src="https://placehold.co/400" alt="badge" />
            <p>{name} a obtenu :</p>
            <p>Badge {typeBadge} le {dateBadge}</p>
          </>
        }
      </div>
    </div>
 
  );
};

export default BadgeObtained;
