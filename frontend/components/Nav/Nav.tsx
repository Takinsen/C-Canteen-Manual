'use client';
import { useMedia } from 'use-media';
import style from './Nav.module.css';
import { useState, useRef, useEffect } from 'react';

export default function Nav() {
  const isMobile = useMedia({ maxWidth: 900 });
  const [isActive, setIsActive] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    }

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobile]);

  return isMobile ? (
    <div
      ref={mobileRef}
      className={
        isActive ? style.containerMobileActive : style.containerMobileInactive
      }
      onClick={() => setIsActive(true)}
    >
      <div className={isActive ? style.logoContainerMobileActive : style.logoContainerMobileInactive}>
      <img className={style.logoMobile} src="/logos/logoShort.svg" />
      <img className={style.logoMobileDark} src="/logos/logoShort-dark.svg" />
      </div>
      <div className={isActive ? style.contentMobileActive : style.contentMobileInactive }>
        Intro <br />
        Seat <br />
        Order <br />
        Payment <br />
        Manage <br />
        Intro <br />
        Seat <br />
        Order <br />
        Payment <br />
        Manage <br />
      </div>
    </div>
  ) : (
    <div className={style.containerDeaktop}>
      <img className={style.logo} src="/logos/logoLong.svg" />
      <img className={style.logoDark} src="/logos/logoLong-dark.svg" />
    </div>
  );
}
