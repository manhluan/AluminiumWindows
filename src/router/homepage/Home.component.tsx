import "./Home.style.scss";
import Banner from "components/banner";
import Layout from "components/layout/Layout.component";
import Footer from "components/footer";
import Bathroom from "components/bathroom/Bathroom.component";
const Home = () => {
    return (
        <Layout>
            <div className="homepage">
                <Banner />
                <Bathroom />
                <Footer></Footer>
            </div>
        </Layout>
    );
};

export default Home;
