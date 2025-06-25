import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";
import style from "./StoreDashboard.module.css";

const StoreDashboard = () => {
  const t = useTranslations("storeDashboardPage");

  return (
    <div className="contentContainer">
      <h2 className="header">{t("section1.title")}</h2>
      <Image
        className="image"
        src="/images/storedashboard1.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "auto",
          height: "522px",
        }}
      />
      <div className="paragraph">{t("section1.paragraph")}</div>

      <div className="devider" />

      <h2 className="header">{t("section2.title")}</h2>

      <Image
        className="image"
        src="/images/storedashboard2.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="paragraph">{t("section2.paragraph")}</div>

      <div className="devider" />

      <h2 className="header">{t("section3.title")}</h2>

      <Image
        className="image"
        src="/images/storedashboard3.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="paragraph">{t("section3.paragraph")}</div>
      <BarBullet 
        text={t("section3.sentence1")}
        header={t("section3.subtitle1")}
      />
      <BarBullet 
        text={t("section3.sentence2")}
        header={t("section3.subtitle2")}
      />
      <BarBullet 
        text={t("section3.sentence3")}
        header={t("section3.subtitle3")}
      />
      <BarBullet 
        text={t("section3.sentence4")}
        header={t("section3.subtitle4")}
      />
     
      <div className="footer"/>
    </div>
  );
};

export default StoreDashboard;
