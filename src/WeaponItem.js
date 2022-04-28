import React from 'react';

export default function WeaponItem({ name, type, range, method }) {
  return (
    <div class-info='weapon-item'>
      <h3> {name} </h3>
      <p>---Weapon Type: {type}---</p>
      <p>Attack range: {range}</p>
      <p>Attack type: {method}</p>
    </div>
    
  );
}
