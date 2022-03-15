import "./Home.style.scss";
import Banner from "components/banner";
import Layout from "components/layout/Layout.component";

const Home = () => {
  return (
    <Layout>
      <div className="homepage">
        <Banner />
      </div>
    </Layout>
  );
};

export default Home;
