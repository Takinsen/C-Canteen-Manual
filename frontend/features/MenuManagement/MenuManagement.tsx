import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";

const Menumanagement = () => {
  const t = useTranslations("menuManagementPage");

  return (
    <div className="contentContainer">
      <h2 className="header">{t("section1.title")}</h2>
      <Image
        className="image"
        src="/images/menumanagement1.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="paragraph">{t("section1.paragraph")}</div>

      <div className="devider" />
      
      <h2 className="header">{t("section2.title")}</h2>
      <Image
        className="image"
        src="/images/menumanagement2.png"
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
        src="/images/menumanagement3.svg"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
       <IconBullet 
        text={t("section3.bullet1")}
        iconPath="/icons/send.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section3.bullet2")}
        iconPath="/icons/package-check.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section3.bullet3")}
        iconPath="/icons/menu.svg"
        autoInvert={false}
        fullWidth={false}
      />

      <div className="devider" />

      <h2 className="header">{t("section4.title")}</h2>
      <Image
        className="image"
        src="/images/menumanagement4.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
       <IconBullet 
        text={t("section4.bullet1")}
        iconPath="/icons/scan-eye.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section4.bullet2")}
        iconPath="/icons/letter-text.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section4.bullet3")}
        iconPath="/icons/list-collapse.svg"
        autoInvert={false}
        fullWidth={false}
      />

      <div className="footer"/>
    </div>
  );
};

export default Menumanagement;
