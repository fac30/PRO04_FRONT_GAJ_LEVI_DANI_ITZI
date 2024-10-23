import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import HeaderBar from './HeaderBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<HeaderBar />
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
