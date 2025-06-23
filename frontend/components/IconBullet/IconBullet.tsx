import React from 'react'

import style from './IconBullet.module.css';

interface IconBulletProps {
  text:string,
  iconPath:string,
  fullWidth?:boolean,
  bigIcon?:boolean,
  autoInvert?:boolean
}

const IconBullet = ({text, iconPath, fullWidth=true, bigIcon=false, autoInvert=true} : IconBulletProps) => {
  return (
    <div className={style.container}>
      <img style={{filter:autoInvert ? "" : "invert(0)"}} className={bigIcon ? style.bigIcon : style.icon} src={iconPath}/>
      <div className={fullWidth ? style.descfull : style.descshort}>
        {text}
      </div>
    </div>
  )
}

export default IconBullet