
import React, { useState } from 'react'
import Layout from '../Components/Layout'


export default function LoginModel() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to handle login/register goes here
    setIsUserLoggedIn(true); // Example of setting the user as logged in
  };

  return (
      <Layout>
          
        {/* when entering the home page a model should appear. 
         which would require to register if user doesn't have an account
         and login if the user does. 
         this would then use something from the backend to create a session for one hour.  */}

          <div className="login">
              <form onSubmit={handleSubmit}>
                  <dialog>
                      <h2>{isUserLoggedIn ? "Login" : "Register"}</h2>
                      <legend>Email</legend>
                      <input type="email" required />
                      <legend>Password</legend>
                      <input type="password" required />
                      {!isUserLoggedIn && (
                          <>
                              <legend>Confirm Password</legend>
                              <input type="password" required />
                          </>
                      )}
                      <input type="checkbox" /> Sign up to newsletter
                      <button type="submit">{isUserLoggedIn ? "Login" : "Register"}</button>
                  </dialog>
              </form>
          </div>

      </Layout>
      
  )
}
