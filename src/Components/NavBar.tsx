import React from 'react';

const NavBar = () => {
    return ( 
        <nav className="bg-gray-100 py-4">
            <div className="container mx-auto">
                <ul className="flex justify-center space-x-6">
                    <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
                    <li><a href="/" className="text-gray-700 hover:text-gray-900">Apparel</a></li>
                    <li><a href="/" className="text-gray-700 hover:text-gray-900">Mugs</a></li>
                    <li><a href="/" className="text-gray-700 hover:text-gray-900">Stationary</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;