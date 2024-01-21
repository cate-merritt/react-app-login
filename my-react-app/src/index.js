import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Import react library from file
import './index.css'; // Import css from file
import App from './App'; // Import main App component
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals

//creats root and specifies root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // Render App component within React.StrictMode


reportWebVitals(); // Uses function to reportWebVitals



