import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Drives from './components/Drives';
import Profile from './components/Profile';


function App() {
  return (
      <Router>
      <div className="App">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Drives />} />
          <Route path="/drives" element={<Drives />} />

          <Route path="/profile" element={<Profile />} />
           {/* <Route path="/upcoming" component={Upcoming}>
           </Route> */}


        </Routes>
    </div>
      </Router>
  );
}

export default App;
