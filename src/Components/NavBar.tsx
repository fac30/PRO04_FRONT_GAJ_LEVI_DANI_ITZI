//add a clcik handler for the id / artist id

import { useState, useRef, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Artist } from "../types/Artist";


function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
   
    const [artists, setArtists] =  useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await fetch("http://localhost:3000/artists");
                if (!response.ok){
                    throw new Error ('Failed to fetch artists');
                }
                const data = await response.json();
                setArtists(data);
            } catch (error) {
                console.log(error);
                setError('Whoopsie Daisy');
            } finally {
                setLoading(false);
            }
        };
        fetchArtists()
    }, []);



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
                            onClick={() => setIsOpen(!isOpen)}
                            className="nav-link"
                        >
                            Artist
                        </button>

                        {loading ? (
                            <div className="text-sm text-gray-500">Loading...</div>
                        ) : error ? (
                            <div className="text-sm text-gray-500">{error}</div>
                        ) :

                       
                        (
                        isOpen && (
                            <ul className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                {artists.map((artist) => (
                                    <li key= {artist.id || artist.name}>
                                        <a
                                            href={`/artist/${artist.id}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {artist.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )
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
