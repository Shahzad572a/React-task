import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from './component/Listing';
import UserProfile from './component/UserProfile';
import './index.css';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
