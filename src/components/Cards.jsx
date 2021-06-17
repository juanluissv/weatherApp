import React from 'react';
import Card from './Card.jsx';


export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div> <h2 className="AddCity"> Please Add City</h2></div>
    )
  }
};