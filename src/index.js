import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import { CodesterContextProvider } from './Context/Context';
import { LensAuthContextProvider } from './Context/MainContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContextProvider } from './Context/Notification';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <LensAuthContextProvider>
      <CodesterContextProvider>
      <NotificationContextProvider>
      <ToastContainer />
        <StyledEngineProvider injectFirst> 
          <App />
        </StyledEngineProvider>
        </NotificationContextProvider>
      </CodesterContextProvider>
    </LensAuthContextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
