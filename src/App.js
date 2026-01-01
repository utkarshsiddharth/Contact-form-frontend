import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import CataloguePage from './components/CataloguePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;