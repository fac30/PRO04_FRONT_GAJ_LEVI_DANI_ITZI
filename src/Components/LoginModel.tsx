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

 // ... previous code remains the same

 const handleSubmit = async (event: React.FormEvent) => {
 	event.preventDefault();
 	setIsSubmitting(true);
 	setErrorMessage('');

 	try {
 		if (isLoginMode) {
 			// Perform login logic
 			const credentials = { email, password }; // Gather form data
 			await onLogin(credentials); // Use the onLogin prop here
 			onClose(); // Close modal on successful login
 			window.location.reload(); // Refresh or update UI
 		} else {
 			// Perform registration logic
 			if (password !== confirmPassword) {
 				throw new Error('Passwords do not match');
 			}
 			await authService.register({ username, email, password, address });
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

 // ... the rest of the component

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
