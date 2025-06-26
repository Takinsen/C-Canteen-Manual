import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";

const Ordermanagement = () => {
  const t = useTranslations("orderManagementPage");

  return (
    <div className="contentContainer">
      <h2 className="header">{t("section1.title")}</h2>
      <Image
        className="image"
        src="/images/ordermanagement1.png"
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
        src="/images/ordermanagement2.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="paragraph">{t("section2.paragraph")}</div>
       <IconBullet 
        text={t("section2.bullet1")}
        iconPath="/icons/gallery-horizontal-end.svg"
        fullWidth={false}
      />
      <IconBullet 
        text={t("section2.bullet2")}
        iconPath="/icons/arrow-up-down.svg"
        fullWidth={false}
      />
      <IconBullet 
        text={t("section2.bullet3")}
        iconPath="/icons/ticket-black.svg"
        fullWidth={false}
      />

      <div className="devider" />

      <h2 className="header">{t("section3.title")}</h2>
      <Image
        className="image"
        src="/images/ordermanagement3.svg"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="paragraph">{t("section3.paragraph")}</div>
       <IconBullet 
        text={t("section3.bullet1")}
        iconPath="/icons/order-pink.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section3.bullet2")}
        iconPath="/icons/order-yellow.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section3.bullet3")}
        iconPath="/icons/order-green.svg"
        autoInvert={false}
        fullWidth={false}
      />
      <IconBullet 
        text={t("section3.bullet4")}
        iconPath="/icons/order-blue.svg"
        autoInvert={false}
        fullWidth={false}
      />


      <div className="footer"/>
    </div>
  );
};

export default Ordermanagement;
