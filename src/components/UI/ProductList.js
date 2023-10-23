import ProductsCard from "./ProductCards";
const ProductList = ({ data }) => {
  return (
    <div className="flex items-center pb-10 gap-6 px-[10%]">
      {data?.map((item) => (
        <ProductsCard item={item} />
      ))}
    </div>
  );
};

export default ProductList;
