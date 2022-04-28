
import React from 'react';

export default function ArmorItem({ 
  name,
  wearers,
  origin,
  picture,
  tags,
}) {
  return (
    <div className='customer-item'>
      <img src={picture} />
      <div>
        <h2>{name}</h2>
      </div>
      <p>origin: {origin}</p>
      <div className='lists'>
        <div>
          tags:
          <ul className='tags'>
            {tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div>
          jobs able to equip:
          <ul className='wearers'>
            {wearers.map(wearer => <li key={wearer}>{wearer.job})</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}