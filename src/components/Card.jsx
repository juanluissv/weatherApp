import React from 'react';
import mycard from  './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({name, id, min, max, onClose, img}) {

  const myImage = `http://openweathermap.org/img/wn/${img}@2x.png`

  return (
  <div className={mycard["card"]}>
    <div className={mycard["close"]} onClick={onClose}>X</div>
    <Link to={`/city/${id}`} className={mycard["titlelink"]}>
      <h3 className={mycard["title"]}>Ciudad: {name}</h3>
    </Link>
    <div className={mycard["block1"]}>min<br /> {min} </div>
    <div className={mycard["block2"]}>max<br />{max}</div>
    <div className={mycard["block3"]}><img src={myImage} alt=""/></div>
  </div>
  )
};