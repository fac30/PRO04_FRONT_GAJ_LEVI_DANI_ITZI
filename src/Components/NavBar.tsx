import React from 'react';

const NavBar = () => {
    return ( 
        <nav className="bg-gray-100 py-4">
            <div className="container mx-auto">
                <ul className="flex justify-center space-x-6">
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="/" className="nav-link">Apparel</a></li>
                    <li><a href="/" className="nav-link">Mugs</a></li>
                    <li><a href="/" className="nav-link">Stationary</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;