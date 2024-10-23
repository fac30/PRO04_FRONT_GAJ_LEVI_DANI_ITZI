import React from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../types/Artist';


interface GalleryImage {
    src: string;
    caption?: string;  
}

interface GalleryProps {
    artist: Artist;
}

const Gallery: React.FC <GalleryProps> = ({ artist }) => {
    const images: GalleryImage[] = Array(6).fill ({
        src: artist.image
});

    return ( 
        <section className="container m-28 py-4">
            <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="text-center">
                        <img 
                            className="h-40 w-full rounded-lg object-cover object-center md:h-60 shadow-lg" 
                            src={image.src}
                            // alt={artist.caption}
                        />
                        <p className="mt-2 text-gray-600">Put something here</p>

                        <Link to='/products'>
                        <button className='buttonStyling'>View More...</button> 
                        </Link>
                    </div> 
                ))}
            </div>
        </section>
     );
}
 
export default Gallery;