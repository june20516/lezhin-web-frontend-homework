import React from 'react';
import MobileLayout from './layout/MobileLayout';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import NotFound from './pages/NotFound';

function App() {
  const App = styled.div`
    background-color: lightgray;
    height: 100vh;
  `;
  return (
    <App className="App">
      <BrowserRouter>
        <MobileLayout>
          <header>
            <h1>Mobile</h1>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MobileLayout>
      </BrowserRouter>
    </App>
  );
}

export default App;
