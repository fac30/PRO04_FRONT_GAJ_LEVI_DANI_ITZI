
import NavBar from './NavBar';
import Footer from './Footer';

import HeaderBar from './HeaderBar';

// Define props for the Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 

	return (
		<>
			<NavBar />
			<HeaderBar/>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
