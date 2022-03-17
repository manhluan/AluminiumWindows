import "./Home.style.scss";
import Banner from "components/banner";
import Layout from "components/layout/Layout.component";
import Footer from "components/footer";
import Bathroom from "components/bathroom/Bathroom.component";
import ShopDeal from "components/shopDeal/ShopDeal.component";
import FeaturedProd from "components/featured-products/FeaturedProd.component";
const Home = () => {
    return (
        <Layout>
            <div className="homepage">
                <Banner />
                <Bathroom />
                <ShopDeal />
                <FeaturedProd />
                <Footer></Footer>
            </div>
        </Layout>
    );
};

export default Home;
