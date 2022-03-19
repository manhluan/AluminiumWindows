import "./Home.style.scss";
import Banner from "components/banner";
import Layout from "components/layout/Layout.component";
import Footer from "components/footer";
import Bathroom from "components/bathroom/Bathroom.component";
import ShopDeal from "components/shopDeal/ShopDeal.component";
import FeaturedProd from "components/featured-products/FeaturedProd.component";
import BannerGrid from "components/banner-grid/BannerGrid.component";
import PopularProd from "components/popular-products/PopularProd.component";
import ColabBrands from "components/colab-brands/ColabBrands.component";
import NewArrivals from "components/new-arrivals/NewArrivals.component";
import Delivery from "components/delivery/Delivery.component";
const Home = () => {
    return (
        <Layout>
            <div className="homepage">
                <Banner />
                <Bathroom />
                <ShopDeal />
                <FeaturedProd />
                <BannerGrid />
                <PopularProd />
                <ColabBrands />
                <NewArrivals />
                <Delivery />
                <Footer />
            </div>
        </Layout>
    );
};

export default Home;
