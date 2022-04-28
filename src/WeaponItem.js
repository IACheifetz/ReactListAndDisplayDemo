import React from 'react';

export default function WeaponItem({ name, type, range, method }) {
  return (
    <div class-info='weapon-item'>
      <h3> {name} </h3>
      <p>{type}</p>
      <p>{range}</p>
      <p>{method}</p>
    </div>
    
  );
}
