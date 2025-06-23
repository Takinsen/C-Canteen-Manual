import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";

const Intro = () => {

  const t = useTranslations("introPage");

  return (
    <div className="contentContainer">
      <h2 className="header">
        {t("section1.title")}
      </h2>
      <Image 
        className="image"
        src="/images/intro1.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
        width: '100%',
        height: 'auto',
      }}
      />
      <div className="paragraph">
     {t("section1.paragraph")}
      </div>

      <div className="devider"/>

      <h2 className="header">
        {t("section2.title")}
      </h2>
      <IconBullet 
        text={t("section2.bullet1")}
        iconPath="/icons/bot.svg"
        fullWidth={false}
      />
      <IconBullet 
        text={t("section2.bullet2")}
        iconPath="/icons/list-end.svg"
        fullWidth={false}
      />
      <IconBullet 
        text={t("section2.bullet3")}
        iconPath="/icons/smile.svg"
        fullWidth={false}
      />
      <IconBullet 
        text={t("section2.bullet4")}
        iconPath="/icons/store.svg"
        fullWidth={false}
      />

      <div className="devider"/>

      <h2 className="header">
        {t("section3.title")}
      </h2>
      <BarBullet 
        text={t("section3.sentence1")}
        header={t("section3.subtitle1")}
        fullWidth={false}
      />
      <BarBullet 
        text={t("section3.sentence2")}
        header={t("section3.subtitle2")}
        fullWidth={false}
      />

      <div className="footer"/>
    </div>
  );
};

export default Intro;
