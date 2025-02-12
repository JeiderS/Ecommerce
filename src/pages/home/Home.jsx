import Layout from "../../components/layout/Layout.jsx";
import HeroSection from "../../components/heroSection/HeroSection.jsx";
import Category from "../../components/category/Category.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Track from "../../components/track/Track.jsx";
import Testimonial from "../../components/testimonial/Testimonial.jsx";


const Home = () => { 
    return (
        <Layout>
            <HeroSection />
            <Category />
            <ProductCard />
            <Track />
            <Testimonial />
        </Layout>
    );
};

export default Home;