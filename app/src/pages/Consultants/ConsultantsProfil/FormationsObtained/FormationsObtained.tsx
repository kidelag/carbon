import React from "react";

import styles from "./FormationsObtained.module.scss";

const contentMiddle = [
  {
    formationName: 'Javascript',
    result: 'Admis',
  },
  {
    formationName: 'PHP',
    result: 'Admis',
  },
  {
    formationName: 'NestJS',
    result: 'Refusé',
  },
  {
    formationName: 'NodeJS',
    result: 'Refusé',
  },
]



interface Props {
}

export const Secondline: React.FC<Props> = () => {

  return (

    <div className={styles.middle}>
      <div className={styles.title}>Formations</div>
      <div className={styles.content}>
        {contentMiddle.map((item, index) => (
          <div className={styles.item} key={index}>
            {item.formationName}
            <br/>
            Résultat: {item.result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secondline;
