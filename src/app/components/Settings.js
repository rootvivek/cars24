import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Colors from './Settings/Colors';
import Privacy from './Settings/Privacy';
import Security from './Settings/Security';

const Settings = () => {
  return (
    <div>
      <Routes>
        <Route path="Colors" element={<Colors />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </div>
  );
};

export default Settings;
