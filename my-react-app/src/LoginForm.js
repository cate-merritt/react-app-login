import React from 'react'; // Import React library
import './App.css'; // Adjust the import based on your actual file name

// Defines functional component LoginForm
// Returns JSX structure (login form)

const LoginForm = () => {
  return (
    <div className="login-form">
      <form>
        <h3 className="login-heading">Log In</h3>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" /> <br/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <button type="submit" class="mybutton">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm; // Exports LoginForm component for availability in other parts of application
