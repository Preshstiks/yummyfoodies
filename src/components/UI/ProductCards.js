import { MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProductsCard = ({ item }) => {
  return (
    <div className="product__items cursor-pointer">
      <motion.div
        whileHover={{ filter: "brightness(50%)" }}
        className="product__img bg-white p-4 w-[200px] h-[200px] flex items-center justify-center"
      >
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={item.productImg}
          width="150px"
          alt="product"
        />
      </motion.div>
      <div className="p-2 product__info">
        <h3 className="product__name text-[17px] font-semibold mt-4">
          <Link to="/shop/id">{item.productName}</Link>
        </h3>
        <div className="text-center">
          <span className="text-[14px]">{item.category}</span>
        </div>
      </div>
      <div className="p-[8px] border border-gray-600 rounded-md product__card-bottom flex items-center justify-between">
        <span className="price text text-[19px] font-medium">{item.price}</span>
        <motion.span
          whileTap={{ scale: 1.2 }}
          className="text-black text-[17px] p-[4px] bg-white rounded-full"
        >
          <MdAdd />
        </motion.span>
      </div>
    </div>
  );
};

export default ProductsCard;
