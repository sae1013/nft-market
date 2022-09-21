import React from "react";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore , {Navigation, Pagination,Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Swiper.scss';


function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const goMarket = (e: React.MouseEvent) => {
    navigate(`/market`);
  };

  const keyVisual = [
    {
      badge:'new',
      imageSrc:"/collectibles.png",
      description:'test..',
      date:'2022-03-05'
    },
    {
      badge:'upcoming',
      imageSrc:"/collectibles.png",
      description:'test..',
      date:'2022-03-05'
    }
  ]
  
  return (
    <section className={styles["container"]}>
      {/* <h1 className={styles["title"]}>Mint, Showcase NFTs</h1> */}
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
            <SwiperSlide>
              <div className="item" style={{backgroundImage:`url(${keyVisualItem.imageSrc})`}}>
                <div className="backdrop">
                  <div className="keyvisual__title">Collectable NFT</div>
                  <div className="keyvisual__date">Wed,july 25th</div>
                  {keyVisualItem.badge === 'new' ? 
                  <span className="badge new">New</span>  
                  :
                  <span className="badge upcomming">Upcomming</span>
                }
                </div>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    // <div className={styles["container"]}>
    //   <section id="1" className={styles["landing-top"]}>
    //     <div dangerouslySetInnerHTML={{ __html: t("common.intro") }}></div>
        // {/* <button onClick={goMarket}>
        //   <span className={styles["icon"]}>👉</span>Play Market
        // </button> */}

    //     {/* <div className={styles['float-banner']}>
    //       <span></span>
    //     </div> */}
    //   </section>
    // </div>
  );
}

export default Home;
