import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import HeaderBar from './HeaderBar';
import LoginModel from './LoginModel';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isLoginModelOpen, setIsLoginModelOpen] = useState(false);

	const handleLoginButtonClick = () => {
		setIsLoginModelOpen(true);
	};

	const closeLoginModel = () => {
		setIsLoginModelOpen(false);
	};

	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
