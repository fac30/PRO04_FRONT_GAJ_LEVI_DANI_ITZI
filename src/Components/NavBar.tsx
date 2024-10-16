import { useState, useRef, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";

function NavBar() {

    const [IsOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const artists = ['Artist 1', 'Artist 2', 'Artist 3'];

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gray-100 py-4">
            <div className="container mx-auto relative"> {/* Make this relative for dropdown positioning */}
                <ul className="flex justify-center space-x-6">
                    <li><a href="/" className="nav-link">Home</a></li>

                    {/* Wrap dropdown in a div and add the ref here */}
                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setIsOpen(!IsOpen)}
                            className="nav-link"
                        >
                            Artist
                        </button>

                        {/* Dropdown */}
                        {IsOpen && (
                            <ul className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                {artists.map((artist, index) => (
                                    <li key={index}>
                                        <a
                                            href={`/artist/${artist.toLowerCase().replace(' ', '-')}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {artist}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <li><a href="/" className="nav-link">Apparel</a></li>
                    <li><a href="/" className="nav-link">Mugs</a></li>
                    <li><a href="/" className="nav-link">Stationary</a></li>

                    <div className="flex ml-auto">
                        <CiShoppingCart size={30} />
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
