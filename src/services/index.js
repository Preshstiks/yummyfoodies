import { motion } from "framer-motion";
import { FiTruck } from "react-icons/fi";
import { SlRefresh } from "react-icons/sl";
import { RiSecurePaymentLine, RiExchangeDollarLine } from "react-icons/ri";
const Services = () => {
  const serviceData = [
    {
      icon: FiTruck,
      title: "Free Delivery",
      subtitle: "No hidden fees, just pure convenience.",
    },
    {
      icon: SlRefresh,
      title: "Easy Returns",
      subtitle:
        "Our return policy is to return any items you're not satisfied with!",
    },
    {
      icon: RiSecurePaymentLine,
      title: "Secure Payment",
      subtitle:
        "We offer secure payment options to ensure your transactions are worry-free.",
    },
    {
      icon: RiExchangeDollarLine,
      title: "Money Back Guarantee",
      subtitle:
        "we've got you covered with our hassle-free money-back guarantee.",
    },
  ];
  return (
    <div className="px-[10%] flex gap-3 my-[70px]">
      {serviceData.map((items, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={index}
          className="p-6 cursor-pointer flex items-start gap-4 w-[350px] rounded-md bg-gray-700"
        >
          <span className="text-xl bg-orange-500 p-3 rounded-full">
            <items.icon />
          </span>
          <div>
            <h3 className="font-semibold text-xl">{items.title}</h3>
            <p className="mt-2 text-sm">{items.subtitle}</p>
          </div>
        </motion.div>
      ))}
      {/* <span className="text-xl bg-orange-500 p-2 rounded-full">
          <FiTruck />
        </span>
        <div>
          <h3 className="font-semibold text-xl">Free Delivery</h3>
          <p className="mt-2">No hidden fees, just pure convenience.</p>
        </div> */}
    </div>
  );
};

export default Services;
