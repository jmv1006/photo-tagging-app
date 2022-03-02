import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import StartUpPage from './startUpPage/startup';
import GamePage from './gamePage/gamepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route path='/' element={<StartUpPage />} />
            <Route path='game' element={<GamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);