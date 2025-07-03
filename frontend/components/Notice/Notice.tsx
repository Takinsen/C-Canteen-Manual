import React from "react";
import style from "./Notice.module.css";

interface noticeInterface {
  title?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
}

const Notice = ({ title, text1, text2, text3, text4 }: noticeInterface) => {
  return (
    <div className={style.container}>
      {title && <h3 className={style.title}>{title}</h3>}
      {text1 && (
        <>
          <br />
          <p className={style.text}>{text1}</p>
        </>
      )}
      {text2 && (
        <>
          <br />
          <p className={style.text}>{text2}</p>
        </>
      )}
      <br />
      {text3 && (
        <>
          <br />
          <p className={style.text}>{text3}</p>
        </>
      )}
      {text4 && (
        <>
          <br />
          <p className={style.text}>{text4}</p>
        </>
      )}
    </div>
  );
};

export default Notice;
