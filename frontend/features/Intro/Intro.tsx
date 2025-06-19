import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="contentContainer">
      <h2 className="header">
        C-Canteen คืออะไร ?
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
      C-Canteen คือระบบจัดการโรงอาหารอัจฉริยะที่ใช้ AI และ
       ข้อมูลเรียลไทม์ เพื่อช่วยให้การใช้โรงอาหารมีประสิทธิภาพมากขึ้น
      ตั้งแต่การหาที่นั่ง การสั่งอาหารไปจนถึงการตรวจสอบ การชำระเงิน
      ทุกอย่างถูกรวมไว้ในแอปเดียว เพื่อความสะดวกและรวดเร็ว
      </div>

      <div className="devider"/>
    </div>
  );
};

export default Intro;
