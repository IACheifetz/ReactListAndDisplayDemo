
import React from 'react';

export default function ArmorItem({ 
  name,
  wearers,
  origin,
  picture,
  tags,
}) {
  return (
    <div className='armor-item'>
      <img src={picture} />
      <div>
        <h2>{name}</h2>
      </div>
      <h3>origin: {origin}</h3>
      <div className='lists'>
        <div>
          <h3>tags:</h3>
          <ul className='tags'>
            {tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div>
          <h3>jobs able to equip:</h3>
          <ul className='wearers'>
            {wearers.map(wearer => <li key={wearer}>{wearer.job})</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}