import React from 'react';
import JobItem from './JobItem';

export default function JobList({ jobs }) {
  return (
    <div className='job-list'>
      {
        jobs.map((job) =>
          <JobItem 
            key={jobs.name} 
            {...job}
          />
        )
      }
    </div>
  );
}