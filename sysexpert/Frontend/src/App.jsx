import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './component/1.Header.jsx';
import Hero from './component/2.Hero.jsx';
import Main from './component/3.Main.jsx';
import Result from './component/4.Result.jsx';
import Footer from './component/5.Footer.jsx';
import Login from "./component/Login.jsx";
import LearnMore from './component/LearnMore.jsx';
import Forms from './component/Forms.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Header */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Main />
              <Result/>
              <Footer />
            </>
          }
        />
        {/* Redirections depuis le Header */}
        <Route path="/about" element={<Navigate to="/hero" />} />
        <Route path="/services" element={<Navigate to="/main" />} />
        <Route path="/solutions" element={<Navigate to="/result" />} />
        {/* Routes pour les composants */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
