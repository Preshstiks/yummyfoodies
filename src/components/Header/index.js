import { NavLink } from "react-router-dom";
import logo from "../../assets/yummy foodies.png";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Profilepic from "../../assets/empty_img.jpg";
import { motion } from "framer-motion";
const Header = () => {
  const navlinks = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "shop",
      display: "Shop",
    },
    {
      path: "cart",
      display: "Cart",
    },
  ];
  return (
    <div>
      <header className="w-full leading-[70px] px-[9%] bg-black text-white">
        <div>
          <div>
            <div className="nav_wrapper flex items-center justify-between">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" width="90px" />
                </NavLink>
              </div>
              <div className="navigation">
                <ul className="menu flex gap-10">
                  {navlinks.map((items) => (
                    <li className="nav_item">
                      <NavLink
                        className={(navClass) =>
                          navClass.isActive
                            ? "font-extrabold text-orange-400"
                            : "font-medium"
                        }
                        to={items.path}
                      >
                        {items.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav_icons flex gap-10 items-center">
                <span className="relative cart__icon">
                  <BsCart3 className=" text-xl" />
                  <span className="count absolute h-[20px] w-[20px] right-[-50%] top-[-50%] flex items-center justify-center text-xs text-white bg-red-600 rounded-full">
                    1
                  </span>
                </span>
                <span className="relative heart__icon">
                  <AiOutlineHeart className="text-xl" />
                  <span className="count text-white absolute h-[20px] w-[20px] right-[-50%] top-[-50%] flex items-center justify-center text-xs bg-red-600 rounded-full">
                    1
                  </span>
                </span>
                <span>
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    width="30px"
                    className=" rounded-full"
                    src={Profilepic}
                    alt="dp"
                  />
                </span>
              </div>
              <div className="mobile_menu hidden">
                <FiMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
