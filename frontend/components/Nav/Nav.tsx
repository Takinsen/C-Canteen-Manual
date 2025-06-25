'use client';
import { useMedia } from 'use-media';
import style from './Nav.module.css';
import { useRef, useEffect, useState } from 'react';
import Item from './components/Item/Item';
import { useRouter, usePathname } from 'next/navigation';
import SectionHeader from './components/SectionHeader/SectionHeader';

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia({ maxWidth: 900 });
  const [isActive, setIsActive] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  const getTabLanguage = () => {
    if (pathname?.includes('/en')) return 'en';
    else return 'th';
  }
  const getTabIndex = () => {
    if (pathname?.includes('/smartseating')) return 1;
    if (pathname?.includes('/orderingfood')) return 2;
    if (pathname?.includes('/payment')) return 3;
    if (pathname?.includes('/storedashboard')) return 4;
    if (pathname?.includes('/ordermanagement')) return 5;
    if (pathname?.includes('/menumanagement')) return 6;
    return 0; 
  };

  const tabIndex = getTabIndex();

  const handleSelect = (path: string) => {
    router.push(path);
  };

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
        <Item text="Introduction" onClick={() => handleSelect(`/${getTabLanguage()}`)} selected={tabIndex === 0} iconPath="/icons/book-marked.svg" />
        <SectionHeader text="User"/>
        <Item text="Smart Seating" onClick={() => handleSelect("/smartseating")} selected={tabIndex === 1} iconPath="/icons/armchair.svg" />
        <Item text="Ordering Food" onClick={() => handleSelect("/orderingfood")} selected={tabIndex === 2} iconPath="/icons/ticket.svg" />
        <Item text="Payment" onClick={() => handleSelect("/payment")} selected={tabIndex === 3} iconPath="/icons/scan-line.svg" />
        <SectionHeader text="Vendor"/>
        <Item text="Dashboard" onClick={() => handleSelect("/storedashboard")} selected={tabIndex === 4} iconPath="/icons/chart-spline.svg" />
        <Item text="Manage Order" onClick={() => handleSelect("/ordermanagement")} selected={tabIndex === 5} iconPath="/icons/wrap-text.svg" />
        <Item text="Manage Menu" onClick={() => handleSelect("/menumanagement")} selected={tabIndex === 6} iconPath="/icons/utensils.svg" />
      </div>
    </div>
  ) : (
    <div className={style.containerDeaktop}>
      <div className={style.devider} />
      <img className={style.logo} src="/logos/logoLong.svg" />
      <img className={style.logoDark} src="/logos/logoLong-dark.svg" />
      <div className={style.contentDesktop}>
        <Item text="Introduction" onClick={() => handleSelect(`/${getTabLanguage()}`)} selected={tabIndex === 0} iconPath="/icons/book-marked.svg" />
        <SectionHeader text="User"/>
        <Item text="Smart Seating" onClick={() => handleSelect("/smartseating")} selected={tabIndex === 1} iconPath="/icons/armchair.svg" />
        <Item text="Ordering Food" onClick={() => handleSelect("/orderingfood")} selected={tabIndex === 2} iconPath="/icons/ticket.svg" />
        <Item text="Payment" onClick={() => handleSelect("/payment")} selected={tabIndex === 3} iconPath="/icons/scan-line.svg" />
        <SectionHeader text="Vendor"/>
        <Item text="Dashboard" onClick={() => handleSelect("/storedashboard")} selected={tabIndex === 4} iconPath="/icons/chart-spline.svg" />
        <Item text="Manage Order" onClick={() => handleSelect("/ordermanagement")} selected={tabIndex === 5} iconPath="/icons/wrap-text.svg" />
        <Item text="Manage Menu" onClick={() => handleSelect("/menumanagement")} selected={tabIndex === 6} iconPath="/icons/utensils.svg" />
      </div>
    </div>
  );
}
