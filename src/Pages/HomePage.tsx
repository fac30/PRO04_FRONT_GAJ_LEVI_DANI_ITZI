import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";

function HomePage() {
  return (
    <Layout>
      <section className="carousel w-[60%] m-auto">
        <Carousel />
      </section>
    </Layout>
  );
}

export default HomePage;
