import React from "react";
import { useTranslation } from "react-i18next";

interface FooterProps {
  children?: JSX.Element;
}

function Footer() {
  const { i18n } = useTranslation();

  return (
    <div
      onClick={() => {
        i18n.changeLanguage("ko-KR");
      }}
    ></div>
  );
}

export default Footer;
