import React from 'react'

import style from './IconBullet.module.css';

interface IconBulletProps {
  text:string,
  iconPath:string,
  fullWidth?:boolean,
}

const IconBullet = ({text, iconPath, fullWidth=true} : IconBulletProps) => {
  return (
    <div className={style.container}>
      <img className={style.icon} src={iconPath}/>
      <div className={fullWidth ? style.descfull : style.descshort}>
        {text}
      </div>
    </div>
  )
}

export default IconBullet