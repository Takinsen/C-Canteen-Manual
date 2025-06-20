'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import style from './LanguageSwitcher.module.css';

const languages = {
  en: 'English',
  th: 'ไทย',
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLocale = locale === 'en' ? 'th' : 'en';

  const handleChange = () => {
    const segments = pathname.split('/');
    segments[1] = toggleLocale;
    router.push(segments.join('/'));
  };

  return (
    <button className={style.Button}  onClick={handleChange}>
      {languages[locale as 'en' | 'th']}
    </button>
  );
}
