import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const { isLoading, error, data: products } = useProducts(category);
  const items: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  if (error) {
    return <></>;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {isLoading || !products
        ? items.map((_, index) => (
            <li key={index}>
              <ProductSkeleton></ProductSkeleton>
            </li>
          ))
        : products?.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
    </ul>
  );
};

export default ProductList;
