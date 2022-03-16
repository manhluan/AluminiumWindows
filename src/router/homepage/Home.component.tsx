import "./Home.style.scss";
import Banner from "components/banner";
import Layout from "components/layout/Layout.component";
import Footer from "components/footer";
const Home = () => {
    return (
        <Layout>
            <div className="homepage">
                <Banner />
                <Footer></Footer>
            </div>
        </Layout>
    );
};

export default Home;
