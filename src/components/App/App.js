import './App.css';
import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LogIn from '../Login/Login';
import Chat from '../Chat/Chat';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <Routes>
        <Route path='/signin' element={<LogIn />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route path='/chat' element={
            <Chat />
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
