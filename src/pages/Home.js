import Helmet from "../components/Helmet";
import Hero from "../assets/hero.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services";
import ProductList from "../components/UI/ProductList";
import { productCard } from "../assets/data/products";
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState(productCard);
  useEffect(() => {
    const filteredProducts = productCard.filter(
      (item) => item.category === "Burger"
    );
    setData(filteredProducts);
  }, []);
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section px-[10%] pt-[55px]">
        <div className="flex space-x-10 items-center">
          <div className="hero__content">
            <p className="hero__subtitle">Trending meals in {year}</p>
            <h2 className="my-6 font-bold text-[35px]">
              Embrace the Delicious Simplicity of Modern Comfort Food!
            </h2>
            <p className="text-gray-300">
              Get Ready to Savor the Simplicity of Delicious Dishes that'll
              Brighten Your Day without the Fuss! Our Menu Brings a Modern Twist
              to Comfort Food, Perfect for Satisfying Your Cravings in the Most
              Delightful Way
            </p>
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="bg-orange-500 hover:underline hover:text-white mt-[30px] py-3 font-semibold rounded-[15px] px-6 text-black buy__btn flex items-center"
            >
              <Link to="/shop">ORDER NOW </Link>
              <HiOutlineArrowNarrowRight className="text-[25px]" />
            </motion.button>
          </div>
          <div className="relative">
            <div className="bg-orange-500 border-white border-[4px] h-[350px] w-[350px] rounded-full"></div>
            <div>
              <img
                src={Hero}
                className="absolute top-0 left-[-15px]"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="trending__products">
        <div>
          <div className="text-center">
            <h2 className="section__title text-[26px] font-medium">
              Trending Products
            </h2>
          </div>
          <ProductList data={data} />
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
