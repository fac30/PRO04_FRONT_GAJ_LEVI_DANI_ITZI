import React from 'react';

interface ImageData {
    src: string;
    caption: string;
}

const Gallery: React.FC = () => {
    const images: ImageData[] = [
        {src: "https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0", caption: "Image One"}, 
        {src: "https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0", caption: "Image Two"}, 
        {src: "https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0", caption: "Image Three"} 
    ];

    return ( 
        <section className="container m-28 py-4">
            <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="text-center">
                        <img 
                            className="h-40 w-full rounded-lg object-cover object-center md:h-60 shadow-lg" 
                            src={image.src}
                            alt={image.caption}
                        />
                        <p className="mt-2 text-gray-600">{image.caption}</p>
                    </div> 
                ))}
            </div>
        </section>
     );
}
 
export default Gallery;