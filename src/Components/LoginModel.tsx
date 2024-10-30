import React, { useState, useEffect } from 'react';
import { authService } from '../AuthService'; // Adjust the import path as needed

// In LoginModel.tsx
export interface LoginModelProps {
	isOpen: boolean;
	onClose: () => void;
	onLogin: (credentials: { email: string; password: string }) => Promise<void>; // Adjust the type as needed
	error?: string; // Optional error message
}

const LoginModel: React.FC<LoginModelProps> = ({ isOpen, onClose, onLogin }) => {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	// Sanitize function
	const sanitize = (unsafe: string) => {
		return unsafe.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Escape < and >
	};

	// Validation function
	const validate = () => {
		const errors: { [key: string]: string } = {};
		if (!email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email is invalid';
		}
		if (!password) {
			errors.password = 'Password is required';
		}
		if (!isLoginMode) {
			if (!username) {
				errors.username = 'Username is required';
			}
			if (!address) {
				errors.address = 'Address is required';
			}
			if (password !== confirmPassword) {
				errors.confirmPassword = 'Passwords do not match';
			}
		}
		setValidationErrors(errors);
		return Object.keys(errors).length === 0; // Return true if no errors
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsSubmitting(true);
		setErrorMessage('');
		setValidationErrors({}); // Clear previous validation errors

		if (!validate()) {
			setIsSubmitting(false);
			return; // Stop submission if validation fails
		}

		try {
			if (isLoginMode) {
				// Perform login logic
				const credentials = { 
					email: sanitize(email), 
					password: sanitize(password) 
				}; // Sanitize form data
				await onLogin(credentials); // Use the onLogin prop here
				onClose(); // Close modal on successful login
				window.location.reload(); // Refresh or update UI
			} else {
				// Perform registration logic
				await authService.register({ 
					username: sanitize(username), 
					email: sanitize(email), 
					password: sanitize(password), 
					address: sanitize(address) 
				}); // Sanitize form data
				onClose(); // Close modal on successful registration
				window.location.reload(); // Refresh or update UI
			}
		} catch (error) {
			setErrorMessage(
				error instanceof Error ? error.message : 'An error occurred. Please try again.'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<dialog open className='bg-white rounded-lg p-6 shadow-lg z-60'>
						<div className='flex justify-between items-center mb-4'>
							<h2 className='text-lg font-bold'>
								{isLoginMode ? 'Login' : 'Register'}
							</h2>
							<button onClick={onClose} className='text-gray-500'>
								X
							</button>
						</div>
						<form onSubmit={handleSubmit}>
							{errorMessage && <p className='text-red-500'>{errorMessage}</p>}

							{/* Conditionally show username and address fields for registration */}
							{!isLoginMode && (
								<>
									<label>
										Username
										<input
											type='text'
											value={username}
											onChange={(e) => setUsername(e.target.value)}
											placeholder='john_doe'
											required
											className='border rounded p-2 mb-2 w-full'
										/>
										{validationErrors.username && <p className='text-red-500'>{validationErrors.username}</p>}
									</label>
									<label>
										Address
										<input
											type='text'
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											placeholder='123 Main St, City, Country'
											required
											className='border rounded p-2 mb-2 w-full'
										/>
										{validationErrors.address && <p className='text-red-500'>{validationErrors.address}</p>}
									</label>
								</>
							)}

							<label>
								Email
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='john@blablabla.com'
									required
									className='border rounded p-2 mb-2 w-full'
								/>
								{validationErrors.email && <p className='text-red-500'>{validationErrors.email}</p>}
							</label>
							<label>
								Password
								<input
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='YourPassword123'
									required
									className='border rounded p-2 mb-2 w-full'
								/>
								{validationErrors.password && <p className='text-red-500'>{validationErrors.password}</p>}
							</label>

							{/* Confirm password for registration */}
							{!isLoginMode && (
								<label>
									Confirm Password
									<input
										type='password'
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										placeholder='Repeat your password'
										required
										className='border rounded p-2 mb-2 w-full'
									/>
									{validationErrors.confirmPassword && <p className='text-red-500'>{validationErrors.confirmPassword}</p>}
								</label>
							)}

							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-blue-500 text-white rounded p-2 mt-2 w-full'
							>
								{isLoginMode ? 'Login' : 'Register'}
							</button>

							<button
								type='button'
								onClick={() => setIsLoginMode(!isLoginMode)}
								className='text-blue-500 mt-2 underline w-full'
							>
								{isLoginMode
									? 'Need to register?'
									: 'Already have an account? Log in'}
							</button>
						</form>
					</dialog>
				</div>
			)}
		</>
	);
};

export default LoginModel;
