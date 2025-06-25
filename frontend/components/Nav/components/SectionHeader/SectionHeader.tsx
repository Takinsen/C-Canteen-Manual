import React from 'react';
import style from './SectionHeader.module.css';

interface headerProps {
  text: string;
}

const SectionHeader = ({text}: headerProps) => {
  return (
    <div className={style.text}>{text}
    <div className={style.bar}/>
    </div>
  )
}

export default SectionHeader