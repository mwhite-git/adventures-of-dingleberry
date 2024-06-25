import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import DevBlog from './components/DevBlog'; // Create this component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/devblog" element={<DevBlog />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
