import { useEffect, useState } from "react";
// import { ProductImage } from "../types/AllTypes";

function Carousel() {
  const [productImages, setProductImages] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product-images`);
        if (!response.ok) {
          throw new Error("Failed to fetch product images");
        }
        const data = await response.json();

        const slideArr = data.map((i: any) => i.image_url);

        setProductImages(slideArr);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Image not available"
        );
      }
    };

    fetchProductImages();
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

  return (
    <section className="carousel">
      {productImages.map((imgSrc) => {
        return <img src={imgSrc} />;
      })}
    </section>
  );
}

export default Carousel;
