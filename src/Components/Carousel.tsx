import { useEffect, useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

function Carousel() {
  const [productImages, setProductImages] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await fetch(`http://18.171.123.115/:3000/product-images`);
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

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(productImages.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === productImages.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="carousel-images overflow-hidden relative">
      <div
        className={"flex transition ease-out duration-400"}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {productImages.map((imgSrc) => {
          return <img src={imgSrc} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full px-3 flex justify-between items-center text-white text-3xl">
        <button onClick={previousSlide}>
          <IoArrowBackCircle />
        </button>
        <button onClick={nextSlide}>
          <IoArrowForwardCircle />
        </button>
      </div>
    </div>
  );
}

export default Carousel;