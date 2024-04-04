import { useState, useEffect } from "react";
import ProductList from "../products/ProductList";

const HomePage = () => {
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {}, [category]);

  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default HomePage;
