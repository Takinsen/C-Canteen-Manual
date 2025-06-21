import React from 'react'

import style from './Item.module.css'

interface ItemProps {
  text:string,
  iconPath:string,
  selected?: boolean,
  onClick?: () => void,
}

const Item = ({text, iconPath, selected, onClick} : ItemProps) => {
  return (
    <div onClick={onClick} className={selected ? style.containerSelected : style.container}>
      <img className={selected ? style.iconSelected : style.icon} src={iconPath} alt={`${text} icon`} />
      <span>{text}</span>
    </div>
  )
}

export default Item