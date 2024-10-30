const API_URL = 'http://18.171.123.115:3000'; // Replaced with the URL for the project's backend

export const authService = {
	async login(credentials: { email: string; password: string }) {
		try {
			const response = await fetch(`${API_URL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(credentials),
			});

			if (!response.ok) {
				const errorText = await response.text(); // Get the response as text
				const errorMessage = errorText ? errorText : 'Login failed';
				throw new Error(errorMessage);
			}

			// Check if the response body is not empty
			const text = await response.text();
			if (text) {
				return JSON.parse(text); // Parse only if there is text
			} else {
				throw new Error('No data received');
			}
		} catch (error) {
			console.error('Login error:', error);
			throw error; // Rethrow the error for further handling
		}
	},
	async register(userData: {
		username: string;
		email: string;
		password: string;
		address: string;
	}) {
		const response = await fetch(`${API_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});
		// Handle response and errors as needed
		if (!response.ok) {
			const errorText = await response.text();
			const errorMessage = errorText ? errorText : 'Registration failed';
			throw new Error(errorMessage);
		}
		return await response.json(); // Return the parsed JSON response
	},
};
