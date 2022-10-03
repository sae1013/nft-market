import React, { useContext,useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Header.module.scss";
import styled from "styled-components";
import SelectBox from "../common/SelectBox";
import { useTranslation } from "react-i18next";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { CategoryOption } from "../../types";
import {FiMenu} from 'react-icons/fi';
import {CgClose} from 'react-icons/cg';
import {IconContext} from 'react-icons';
import { haltContext } from "../../context/context";
import { motion,AnimatePresence } from "framer-motion"


enum LANGUAGE {
  "EN" = "en-EN",
  "KR" = "ko-KR",
}

const Button = styled.button`
  outline: none;
  background: none;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 10px;
  color: #eee;
  transition: all 0.2s ease;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  box-shadow: ${(props) => (props.disabled ? undefined : "0px 0px 5px #000")};

  &:hover {
    opacity: 0.6;
    box-shadow: 0px 0px 5px #000;
  }
`;
const LoginButton = styled(Button)``;

const ExploreButton = styled(Button)``;

function Header(props) {
  console.log()
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  const { t, i18n } = useTranslation();
  const ctx = useContext(haltContext);
  const navigate = useNavigate();
  const [onToggleMenu,setToggle] = useState(false);

  const handleToggleMenu = () => {
      setToggle(!onToggleMenu)
  }

  const loginHandler = async(e: React.MouseEvent<HTMLElement>) => {
    try {
      await connectWithMetamask();
    } catch (err) {
      window.alert(err);
    }
  };

  const goHome = () => {
    navigate("/");
  };

  const logoutHandler = (e) => {
    disconnect();
  };

  const goCollection = (e) => {
    navigate("/market");
  };

  const handleChangeTrans = (option?: CategoryOption | null) => {
    let defaultTrans = LANGUAGE.EN;
    if (option) {
      switch (option.value) {
        case LANGUAGE.EN:
          defaultTrans = LANGUAGE.EN;
          break;
        case LANGUAGE.KR:
          defaultTrans = LANGUAGE.KR;
          break;
        default:
          defaultTrans = LANGUAGE.EN;
      }
      i18n.changeLanguage(defaultTrans);
    }
  };

  return (
    <section>
      <div className={styles.desktop_nav}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={goHome}>
            NFT
          </div>

          {address ? ( // 주소부분
              <div>
            <span className={styles["address"]}>{`${address.slice(
                0,
                6
            )}...${address.slice(-5)}`}</span>
                <LoginButton disabled={ctx.isHaltLogin} onClick={logoutHandler}>
                  {t("common.logout")}
                </LoginButton>
              </div>
          ) : (
              <div>
                <LoginButton disabled={ctx.isHaltLogin} onClick={loginHandler}>
                  {t("common.login")}
                </LoginButton>
              </div>
          )}

          <div>
            <ExploreButton disabled={ctx.isHaltLogin} onClick={goCollection}>
              {t("common.explore")}
            </ExploreButton>
          </div>
          <div className={styles["select-wrapper"]}>
            <SelectBox onChange={handleChangeTrans} />
          </div>

        </div>
      </div>

      <div className={styles.mobile_nav}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={goHome}>
            NFT
          </div>
          <div className={styles.menu} onClick={handleToggleMenu}>
            {onToggleMenu ?

                <IconContext.Provider value={{size:'35' ,color:'white'}}>
                    <CgClose/>
                </IconContext.Provider>
                :

                <IconContext.Provider value={{size:'35' ,color:'white'}}>
                  <FiMenu/>
                </IconContext.Provider>
            }

          </div>
        </div>

            <AnimatePresence>
              {onToggleMenu &&
                  <motion.div className={styles.nav_contents} initial={{right:-100}} animate={{right:0}} exit={{right:-200}}
                  >
                    {address && <span className={styles["address"]}>{`${address.slice(
                        0,
                        6
                    )}...${address.slice(-5)}`}</span>}
                    {address ?
                        <LoginButton disabled={ctx.isHaltLogin} onClick={logoutHandler}>{t("common.logout")}</LoginButton>
                        :
                        <LoginButton disabled={ctx.isHaltLogin} onClick={loginHandler}>{t("common.login")}</LoginButton>
                    }
                    <ExploreButton disabled={ctx.isHaltLogin} onClick={goCollection}>{t("common.explore")}</ExploreButton>
                    <div className={styles["select-wrapper"]}>
                      <SelectBox onChange={handleChangeTrans} />
                    </div>
                  </motion.div>
              }
            </AnimatePresence>

      </div>

    </section>
  );
}

export default Header;
