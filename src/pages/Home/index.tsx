import Experience from "../../components/Exprerience";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Introduction from "../../components/Introduction";
import Scroll from "../../components/Scroll";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4">
        <Introduction />
      </div>
      <Scroll />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
