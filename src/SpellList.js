import React from 'react';
import SpellItem from './SpellItem';

export default function SpellList({ spells }) {
  return (
    <div className='spell-list'>
      {spells.map((spell) => <SpellItem key={spell._id} 
        {...spell} />)}
    </div>
  );
}

