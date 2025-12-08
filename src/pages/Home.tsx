import "../styles/Home.scss";
import Header from "../components/generic/header/Header";
import Footer from "../components/generic/footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div id="headBlock" className="imgBackground">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;