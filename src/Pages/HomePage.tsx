import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";

function HomePage() {
  return (
    <Layout>
      <section className="carousel w-[40%] m-auto z-10">
        <Carousel />
      </section>
      <section className="artists-home"></section>
      <section className="latest-arrivals"></section>
      <section className="most-populars"></section>
    </Layout>
  );
}

export default HomePage;
