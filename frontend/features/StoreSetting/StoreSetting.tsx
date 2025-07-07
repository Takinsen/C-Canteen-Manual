import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";
import style from "./StoreSetting.module.css";

const StoreSetting = () => {
  const t = useTranslations("storeSettingPage");

  return (
     <div className="contentContainer">
      <h2 className="header">{t("section1.title")}</h2>
      <Image
        className="image"
        src="/images/storesetting1.png"
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
        src="/images/storesetting2.png"
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
        src="/images/storesetting3.png"
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
        iconPath="/icons/text.svg"
      />
      <IconBullet 
        text={t("section3.bullet2")}
        iconPath="/icons/clock-fading.svg"
      />

      <div className="devider" />

      <h2 className="header">{t("section4.title")}</h2>
      <Image
        className="image"
        src="/images/storesetting4.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="paragraph">{t("section4.paragraph")}</div>

      <div className="devider" />

       <h2 className="header">{t("section5.title")}</h2>
      <Image
        className="image"
        src="/images/storesetting5.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="paragraph">{t("section5.paragraph")}</div>

      <div className="footer"/>
    </div>
  );
};

export default StoreSetting;
