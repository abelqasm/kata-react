import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const { isLoading, error, data: products } = useProducts(category);
  if (error) {
    return <></>;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {isLoading || !products ? (
        <></>
      ) : (
        products?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ProductList;
