import React from "react";

import { HORIZONTAL_GLOBAL_NAV_HEIGHT } from "@atlaskit/atlassian-navigation";
import EmptyState from "@atlaskit/empty-state";

import styles from "./Home.module.scss";
import {Stats} from "./Stats/Stats";
import Events from "./Events/Events";
import News from "./News/News";

interface Props {
}


export const Home: React.FC<Props> = () => {

  return (
    <div className={styles.view}>
      <Stats/>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <News/>
        </div>
        <div className={styles.right}>
          <Events/>
        </div>
      </div>
    </div>
  );
};

export default Home;
