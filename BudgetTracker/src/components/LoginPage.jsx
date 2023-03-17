import React from 'react'

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="hero"></div>
      <div className="form">
        <div className="container">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className='button'>Login</button>
        </div>
        <div className='span'>
            <span>Forgot Password?</span>
            <span>New User</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage