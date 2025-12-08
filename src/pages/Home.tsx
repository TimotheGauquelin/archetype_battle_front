import "../styles/Home.scss";
import Header from "../components/generic/header/Header";
import Slider from "../components/generic/header/Slider";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div id="headBlock" className="imgBackground">
        <Header />
      </div>
    </div>
  );
};

export default Home;