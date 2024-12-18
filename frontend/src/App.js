import React, {useState, useEffect} from 'react';
import './App.css';
import Dashboardpage from './Pages/Dashboardpage';
import Homepage from './Pages/Homepage';
import Loginpage from './Authentication/Loginpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Authentication/Signuppage';
import firebase from "./Authentication/firebase"

function App() {

  const [user, setUser] = useState(null);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element ={user ? <Dashboardpage user={user} /> : <Loginpage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
