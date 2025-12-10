import '../styles/Home.scss';
import Header from '../components/generic/header/Header';
import Footer from '../components/generic/footer/Footer';
import PageContent from '../components/generic/PageContent';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div id="headBlock" className="imgBackground">
        <Header />
        <div className="h-[500px]"></div>
      </div>
      <PageContent>
        <h1>Home</h1>
      </PageContent>
      <Footer />
    </div>
  );
};

export default Home;
