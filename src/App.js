//import logo from './logo.svg';
import JobList from './JobList.js';
import { jobs } from './Jobs-data.js';
import WeaponList from './WeaponList.js';
import { weapons } from './Weapons-data.js';
import './App.css';

// import your arrays here

function App() {
  return (
    <div className="App">
      <JobList jobs={jobs} />
      <WeaponList weapons={weapons} />
    </div>
  );
}

export default App;
