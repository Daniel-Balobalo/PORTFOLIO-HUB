import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import PortfolioHub from './components/PortfolioHub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/portfoliohub" element={<PortfolioHub />} />
      </Routes>
    </Router>
  );
}

export default App;
