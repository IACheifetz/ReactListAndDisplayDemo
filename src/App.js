//import logo from './logo.svg';
import JobList from './JobList.js';
import { jobs } from './Jobs-data.js';
import './App.css';

// import your arrays here

function App() {
  return (
    <div className="App">
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
