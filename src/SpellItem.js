
import React from 'react';

export default function SpellItem({ 
  name,
  castType,
  manaCost,
  effects,
}) {
  return (
    <div className='spell-item'>
      <h2>{name}</h2>
      <h3>Cast type: {castType}</h3>
      <h3>Mana to cast: {manaCost}</h3>
      <p>Spell Damage: {effects.damage}</p>
      <p>Spell Effect: {effects.status}</p>

    </div>
  );
}
