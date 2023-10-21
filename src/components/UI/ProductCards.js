import ProductImg from "../../assets/burger1.png";
import { GrFormAdd } from "react-icons/gr";
import { motion } from "framer-motion";
const ProductsCard = () => {
  return (
    <div className="product__items">
      <div className="product__img">
        <img src={ProductImg} alt="product" />
      </div>
      <h3 className="product__name">Veggies & Chicken Burger</h3>
      <span>Burger</span>
      <div className="product__card-bottom">
        <span className="price">$30</span>
        <span>
          <GrFormAdd />
        </span>
      </div>
    </div>
  );
};

export default ProductsCard;
