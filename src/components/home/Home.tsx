import React from "react";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../Swiper.scss';

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goMarket = (e: React.MouseEvent) => {
    navigate(`/market`);
  };

  const keyVisual = [
    {
      imageSrc:"/collectibles.png",
      description:'test..',
      date:'2022-03-05'
    }
  ]
  return (
    <div className={styles["container"]}>
      <div className="swiper__container">
        <Swiper
          slidesPerView={1}
          threshold={70}
        >
          <SwiperSlide>
            <div className="item" style={{height:'100%',backgroundImage:`url(${keyVisual[0].imageSrc})`}}>sfasdfasdfasdfasf</div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="item" style={{height:'100%',backgroundImage:`url(${keyVisual[0].imageSrc})`}}>sfasdfasdfasdfasf</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    // <div className={styles["container"]}>
    //   <section id="1" className={styles["landing-top"]}>
    //     <div dangerouslySetInnerHTML={{ __html: t("common.intro") }}></div>
    //     {/* <button onClick={goMarket}>
    //       <span className={styles["icon"]}>👉</span>Play Market
    //     </button> */}

    //     {/* <div className={styles['float-banner']}>
    //       <span></span>
    //     </div> */}
    //   </section>
    // </div>
  );
}

export default Home;
