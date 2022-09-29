import React, { useContext } from "react";
import styles from "./Header.module.scss";
import styled from "styled-components";
import SelectBox from "../common/SelectBox";
import { useTranslation } from "react-i18next";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { CategoryOption } from "../../types";
import toast, { Toaster } from "react-hot-toast";
import {haltContext} from "../../context/context";

enum LANGUAGE {
  "EN" = "en-EN",
  "KR" = "ko-KR",
}

const LoginButton = styled.button`
  outline: none;
  background: none;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 10px;
  color: #eee;
  transition: all 0.2s ease;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.6 : 1};
  box-shadow: ${props => props.disabled ? undefined :'0px 0px 5px #000'};
  
  &:hover {
    opacity: 0.6;
    box-shadow: 0px 0px 5px #000;
  }
  
`;

function Header(props) {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  const { t, i18n } = useTranslation();
  const ctx = useContext(haltContext);

  const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
    try {
      connectWithMetamask();
    } catch (err) {
      window.alert(err)
    }

  };

  const logoutHandler = (e) => {
    disconnect();
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
    <>
      <div className={styles.container}>
        {address ? (
          <div>
            <span className={styles["address"]}>{`${address.slice(
              0,
              6
            )}...${address.slice(-5)}`}</span>
            <LoginButton disabled= {ctx.isHaltLogin} onClick={logoutHandler}>{t('common.logout')}</LoginButton>
          </div>
        ) : (
          <div>
            <LoginButton disabled= {ctx.isHaltLogin} onClick={loginHandler}>{t('common.login')}</LoginButton>
          </div>
        )}
        <div className={styles["select-wrapper"]}>
          <SelectBox onChange={handleChangeTrans} />
        </div>
      </div>
    </>
  );
}

export default Header;
