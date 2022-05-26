import './App.css';
import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LogIn from '../Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<LogIn />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route path='/' element={
            <Navbar />
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
