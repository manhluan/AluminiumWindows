import "./Home.style.scss";
import Banner from "components/banner";
import Layout from "components/layout/Layout.component";
import Bathroom from "components/bathroom/Bathroom.component";
import ShopDeal from "components/shopDeal/ShopDeal.component";
import FeaturedProd from "components/featured-products/FeaturedProd.component";
import BannerGrid from "components/banner-grid/BannerGrid.component";
import PopularProd from "components/popular-products/PopularProd.component";
import ColabBrands from "components/colab-brands/ColabBrands.component";
import NewArrivals from "components/new-arrivals/NewArrivals.component";
import Delivery from "components/delivery/Delivery.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "features/productsReducer";

const Home = () => {
    const products = useSelector((state: any) => state.products.products)
    const dispatch = useDispatch();
    console.log("products: ", products);

    useEffect(() => {
        dispatch(getProducts());
    }, [])
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
                {/* <Footer /> */}
            </div>
        </Layout>
    );
};

export default Home;
