import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';

export default function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
