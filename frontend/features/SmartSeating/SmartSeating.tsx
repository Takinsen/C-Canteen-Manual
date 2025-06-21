import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import IconBullet from "@/components/IconBullet/IconBullet";
import BarBullet from "@/components/BarBullet/BarBullet";

const SmartSeating = () => {

  const t = useTranslations("smartSeatingPage");

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

        
    </div>
  );
};

export default SmartSeating;
