import React from 'react';
import WeaponItem from './WeaponItem';

export default function WeaponList({ weapons }) {
  return (
    <div className='weapon-list'>
      {
        weapons.map((weapon) =>
          <WeaponItem 
            key={weapons.name} 
            {...weapon}
          />
        )
      }
    </div>
  );
}
