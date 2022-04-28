import React from 'react';
import ArmorItem from './ArmorItem';

export default function ArmorList({ armors }) {
  return (
    <div className='armor-list'>
      {armors.map((armor) => <ArmorItem key={armor._id} 
        {...armor} />)}
    </div>
  );
}
