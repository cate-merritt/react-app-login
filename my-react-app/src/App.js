import React from 'react'; // Import react library
import './App.css'; // Import CSS file to apply styling
import LoginForm from './LoginForm'; // Import 'LoginForm' component from file
import Navigation from './Navigation'; // Import 'Navigation' component from file

// Functional component called App
// Returns JSX structure with 'Navigation' and 'LoginForm' components

function App() {
  return (
    <div>
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App; // Exports app for use in other parts of application