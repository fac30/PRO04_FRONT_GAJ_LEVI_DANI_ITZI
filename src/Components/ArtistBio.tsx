import React from 'react';

interface ArtistData {
    name: string;
    imageURL: string;
    bio: string; 
}

const ArtistBio: React.FC = () => {
    const artist: ArtistData = {
        name: 'Artist Name',
        imageURL: "https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0",
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo unde dicta neque alias magni facere vitae tenetur ab possimus. Aperiam, placeat voluptatibus? Dolorem dolore cum quod possimus enim iste.'
    }


    return ( 
        <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 gap-4">
            <img 
                className="h-40 w-full rounded-lg object-cover object-center md:h-60 shadow-lg" 
                src = {artist.imageURL}/>
            <p className='paragraph-text'>{artist.bio} {artist.bio}</p>
        </div>
        </div>

     );
}
 
export default ArtistBio;