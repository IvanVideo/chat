import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyB5UDsxYmf2dN-W5KsQbiTmVWtIEZoOcV8",
    authDomain: "chat-f77ca.firebaseapp.com",
    projectId: "chat-f77ca",
    storageBucket: "chat-f77ca.appspot.com",
    messagingSenderId: "451406030289",
    appId: "1:451406030289:web:c672988d397464cadc6cf0",
    measurementId: "G-KYKDP26MPF"
  }
);

export const Context = React.createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
