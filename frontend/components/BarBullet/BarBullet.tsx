import React from 'react'

import style from './BarBullet.module.css';

interface IconBulletProps {
  text:string,
  header?:string
  fullWidth?:boolean,
}

const BarBullet = ({text, header, fullWidth=true} : IconBulletProps) => {
  return (
    <div className={style.container}>
      <div className={style.bar}/>
      <div className={fullWidth ? style.descfull : style.descshort}>
        {header && <h3 className={style.header}>{header}</h3>}
        <br/>
        {text}
      </div>
    </div>
  )
}

export default BarBullet