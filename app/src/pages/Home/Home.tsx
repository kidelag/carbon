import React from "react";

import { HORIZONTAL_GLOBAL_NAV_HEIGHT } from "@atlaskit/atlassian-navigation";
import EmptyState from "@atlaskit/empty-state";

import styles from "./Home.module.scss";

interface Props {
}


export const Home: React.FC<Props> = () => {

  return (
    <div
      className={styles.view}
      style={{ minHeight: `calc(100vh - ${HORIZONTAL_GLOBAL_NAV_HEIGHT}px)` }}
    >
    <EmptyState
      header="Ceci est le Home.tsx"
      description="Viens modif ici pour créer des dingueries"
    />
    </div>
  );
};

export default Home;
