import React from "react";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goMarket = (e: React.MouseEvent) => {
    navigate(`/market`);
  };
  
  return (
    <div className={styles["container"]}>
      <section id="1" className={styles["landing-top"]}>
        <div dangerouslySetInnerHTML={{ __html: t("common.intro") }}></div>
        <button onClick={goMarket}>
          <span className={styles["icon"]}>👉</span>Play Market
        </button>

        {/* <div className={styles['float-banner']}>
          <span></span>
        </div> */}
      </section>
    </div>
  );
}

export default Home;
