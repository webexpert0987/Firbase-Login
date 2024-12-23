import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup } from './firebase'; // Import Google login functions

function Login() {
  const [error, setError] = useState('');

  // Handle Google login
  const handleGoogleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Successful login
        const user = result.user;
        console.log('Logged in as: ', user.email);
      })
      .catch((error) => {
        // Handle error
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if login fails */}
    </div>
  );
}

export default Login;
