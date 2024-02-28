import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>Roy Shop BD</div>
      <div className={style.text}>C all rights reserved</div>
    </div>
  );
};

export default Footer;
