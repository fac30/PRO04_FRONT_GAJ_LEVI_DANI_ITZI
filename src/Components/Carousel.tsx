import { useEffect, useState } from "react";
import { ProductImage } from "../types/AllTypes";

function Carousel() {
  const [productImages, setProductImages] = useState<ProductImage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product-images`);
        if (!response.ok) {
          throw new Error("Failed to fetch product images");
        }
        const data = await response.json();
        setProductImages(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Image not available"
        );
      }
    };
    if (productImages) {
      fetchProductImages();
    }
  }, []);

  if (error || !productImages) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </>
    );
  }

  //   const slideArray = [];
  // the array should contain all the URLs of productImage.image_url
  // Should i use a forEach?

  return (
    <section className="carousel">
      {/* {slides.map(slideArray) => {
        return <img src={slideArray} />
      }} */}
    </section>
  );
}

export default Carousel;
