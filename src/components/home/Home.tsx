import React from "react";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Swiper.scss";
import { keyVisual } from "./Keyvisual";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goMarket = (e: React.MouseEvent) => {
    navigate(`/market`);
  };

  return (
    <section className={styles["container"]}>
      <button onClick={goMarket}>
        <span className={styles["icon"]}>👉</span>Play Market
      </button>
      <div className="keyvisual__container">
        <Swiper
          slidesPerView={1}
          threshold={70}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {keyVisual.map((keyVisualItem) => (
            <SwiperSlide key={keyVisualItem.id}>
              <div
                className="item"
                style={{ backgroundImage: `url(${keyVisualItem.imageSrc})` }}
              >
                <div className="backdrop">
                  <div className="keyvisual__title">
                    {keyVisualItem.description}
                  </div>
                  <div className="keyvisual__date">{keyVisualItem.date}</div>
                  {keyVisualItem.badge === "new" ? (
                    <span className="badge new">
                      {keyVisualItem.badge[0].toUpperCase() +
                        keyVisualItem.badge.slice(1)}
                    </span>
                  ) : (
                    <span className="badge upcomming">
                      {keyVisualItem.badge[0].toUpperCase() +
                        keyVisualItem.badge.slice(1)}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Home;
