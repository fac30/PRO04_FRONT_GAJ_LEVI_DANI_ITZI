import React, { useState, useEffect } from 'react';

interface LoginModelProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModel: React.FC<LoginModelProps> = ({ isOpen, onClose }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Effect to prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      if (isUserLoggedIn) {
        // Perform login
        // Example: await loginUser(email, password);
      } else {
        // Perform registration
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }
        // Example: await registerUser(email, password, name);
      }
      setIsUserLoggedIn(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg z-60">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">
                {isUserLoggedIn ? "Login" : "Register"}
              </h2>
              <button onClick={onClose} className="text-gray-500">
                X
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <legend>Name</legend>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="border rounded p-2 mb-2 w-full" 
              />
              <legend>Phone Number</legend>
              <input 
                type="tel" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                required 
                className="border rounded p-2 mb-2 w-full" 
              />
              <legend>Email</legend>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="border rounded p-2 mb-2 w-full" 
              />
              <legend>Password</legend>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="border rounded p-2 mb-2 w-full" 
              />
              {!isUserLoggedIn && (
                <>
                  <legend>Confirm Password</legend>
                  <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                    className="border rounded p-2 mb-2 w-full" 
                  />
                </>
              )}
              <input type="checkbox" /> Sign up to newsletter
              <br></br>
              <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white rounded p-2 mt-2">
                {isUserLoggedIn ? "Login" : "Register"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModel;
