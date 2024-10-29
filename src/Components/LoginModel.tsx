import React, { useState, useEffect } from 'react';

export interface LoginModelProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModel: React.FC<LoginModelProps> = ({ isOpen, onClose }) => {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [username, setUsername] = useState('');
	const [address, setAddress] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

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

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsSubmitting(true);
		setErrorMessage('');

		try {
			if (isLoginMode) {
				// Perform login logic
				// Example: await loginUser(email, password);
			} else {
				// Perform registration logic
				if (password !== confirmPassword) {
					throw new Error('Passwords do not match');
				}
				// Example: await registerUser(username, email, password, address);
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
