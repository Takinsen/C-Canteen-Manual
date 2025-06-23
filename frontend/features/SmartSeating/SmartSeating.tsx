import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";

const SmartSeating = () => {
  const t = useTranslations("smartSeatingPage");

  return (
    <div className="contentContainer">
      <h2 className="header">{t("section1.title")}</h2>
      <Image
        className="image"
        src="/images/smartseating1.svg"
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
        src="/images/smartseating2.png"
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
        iconPath="/icons/layoutButton1.svg"
        fullWidth={false}
        bigIcon={true}
      />
      <IconBullet
        text={t("section2.bullet2")}
        iconPath="/icons/layoutButton2.svg"
        fullWidth={false}
        bigIcon={true}
      />
      <IconBullet
        text={t("section2.bullet3")}
        iconPath="/icons/layoutButton3.svg"
        fullWidth={false}
        bigIcon={true}
      />

      <div className="devider" />

      <h2 className="header">{t("section3.title")}</h2>

      <Image
        className="image"
        src="/images/smartseating3.png"
        alt="intro ui image"
        width={1210}
        height={761}
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="paragraph">{t("section3.paragraph")}</div>

      <div className="devider" />

      <h2 className="header">{t("section4.title")}</h2>

      <IconBullet
        text={t("section4.bullet1")}
        iconPath="/icons/greentable.svg"
        fullWidth={false}
        bigIcon={true}
        autoInvert={false}
      />
      <IconBullet
        text={t("section4.bullet2")}
        iconPath="/icons/yellowtable.svg"
        fullWidth={false}
        bigIcon={true}
        autoInvert={false}
      />
      <IconBullet
        text={t("section4.bullet3")}
        iconPath="/icons/redtable.svg"
        fullWidth={false}
        bigIcon={true}
        autoInvert={false}
      />
      <IconBullet
        text={t("section4.bullet4")}
        iconPath="/icons/graytable.svg"
        fullWidth={false}
        bigIcon={true}
        autoInvert={false}
      />
    </div>
  );
};

export default SmartSeating;
