import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LoginModel from './LoginModel';
import HeaderBar from './HeaderBar';

// Define props for the Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// const [isLoginModelOpen, setIsLoginModelOpen] = useState(false);

	// const openLoginModel = () => setIsLoginModelOpen(true);
	// const closeLoginModel = () => setIsLoginModelOpen(false);

	return (
		<>
			<NavBar />
			<HeaderBar/>
				{/* <button className="flex " onClick={openLoginModel}>Open Login</button>
			<LoginModel isOpen={isLoginModelOpen} onClose={closeLoginModel} />
			 */}
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
