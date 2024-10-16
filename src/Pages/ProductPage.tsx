import React from "react";
import Layout from "../Components/Layout";
import OptionButtonGroup from "../Components/OptionButtonGroup";

interface ImageData {
    src: string;
}

const ProductPage: React.FC = () => {
    const availableSizes = ["XS","S", "M", "L", "XL", "XXL","XXXL"];
    const handleSizeSelection = (size: string) => {
      console.log(`Selected size: ${size}`);
    };
  

    const images: ImageData[] = [
        {src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        {src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        {src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
        {src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
    ];

    return ( 

        <Layout>
        <div className="mainContainer grid grid-cols-2">
         <div className="productContainer grid grid-cols-2 m-28 gap-4">
          {images.map((image, index) => (
                <div key={index} className="text-center">
                    <img 
                     className="h-40 w-full rounded-lg object-cover object-center md:h-60 shadow-lg" 
                     src={image.src}
                  />
             </div>
             ))}
            </div>
        
    <div className="productInfo my-20">
    <h2>Products: </h2>
    <br />
    <p> need to put price here</p>
    <br />
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia cum voluptatibus fugiat dignissimos cupiditate dolorum commodi deleniti sint. Quam sed molestiae corporis minus dolorum quas dicta nesciunt, cum tenetur.</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia cum voluptatibus fugiat dignissimos cupiditate dolorum commodi deleniti sint. Quam sed molestiae corporis minus dolorum quas dicta nesciunt, cum tenetur.</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia cum voluptatibus fugiat dignissimos cupiditate dolorum commodi deleniti sint. Quam sed molestiae corporis minus dolorum quas dicta nesciunt, cum tenetur.</p>
    <br />
    <OptionButtonGroup 
    options={availableSizes}
    onOptionSelect={handleSizeSelection}
    />
<br/>
    <p> By Artist name that will be a link</p>


    </div>
    </div>

    </Layout>
        

     );
}
 
export default ProductPage;

