import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import styled, { ThemeProvider } from 'styled-components';
import MobileLayout from './layout/MobileLayout';
import Home from './pages/Home';
import Ranking from './pages/ranking';
import NotFound from './pages/NotFound';
import Header from './components/header';
import GlobalStyle from './styles/globalStyle';
import { mobileTheme } from './styles/theme';

const StyledApp = styled.div`
  background-color: lightgray;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp className="App">
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={mobileTheme}>
            <MobileLayout>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MobileLayout>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </StyledApp>
  );
}

export default App;
