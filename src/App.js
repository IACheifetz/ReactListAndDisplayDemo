//import logo from './logo.svg';
import JobList from './JobList.js';
import { jobs } from './Jobs-data.js';
import WeaponList from './WeaponList.js';
import { weapons } from './Weapons-data.js';
import ArmorList from './ArmorList.js';
import { armors } from './Armor-data.js';
import SpellList from './SpellList.js';
import { spells } from './Spell-data.js';
import './App.css';

// import your arrays here

function App() {
  return (
    <div className="App">
      <JobList jobs={jobs} />
      <WeaponList weapons={weapons} />
      <ArmorList armors={armors} />
      <SpellList spells={spells} />
    </div>
  );
}

export default App;
