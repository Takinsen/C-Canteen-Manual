'use client';
import { useMedia } from 'use-media';
import style from './Nav.module.css';

export default function Nav() {
  const isMobile = useMedia({ maxWidth: 900 });

  return isMobile ? (
    <div className={style.containerMobileInactive}>
      <img className={style.logoMobile} src="/logos/logoShort.svg" />
      <img className={style.logoMobileDark} src="/logos/logoShort-dark.svg" />
    </div>
  ) : (
    <div className={style.containerDeaktop}>
      <img className={style.logo} src="/logos/logoLong.svg" />
      <img className={style.logoDark} src="/logos/logoLong-dark.svg" />
    </div>
  );
}