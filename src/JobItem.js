import React from 'react';

export default function JobItem({ job, role, alignment }) {
  return (
    <div class-info='job-item'>
      <h3> {job} </h3>
      <p>Role: {role}</p>
      <p>--Alignment: {alignment}--</p>
    </div>
    
  );
}
