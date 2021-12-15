import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Repo from './pages/Repo';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />} />

        <Route path='/:username' element={<Profile />} />

        <Route path='/:username/:reponame' element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
