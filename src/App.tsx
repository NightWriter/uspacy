import React, { FC } from "react";
import styles from "./App.module.css";

import Overview from "./components/overview/Overview";
import Registration from "./components/registration/Registration";

import "./App.module.css";

const App: FC = () => {
  return (
    <div>
      <Overview />
      <Registration />
      {/* <div className={styles.conferenceDate}>
        <p>Безкоштовна онлайн-конференція</p>
        <img />
        <p>30 квітня о 10:00</p>
      </div> */}
    </div>
  );
};

export default App;
