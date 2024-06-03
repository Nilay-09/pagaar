import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';

import './App.css'
import Registration from './components/Registration';
import ChooseLanding from './components/Landing/ChooseLanding';



function Dashboard() {
  return <div>Dashboard</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseLanding />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
