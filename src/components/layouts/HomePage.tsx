import { useState } from "react";
import ProductList from "../products/ProductList";
import useCategories from "../../hooks/useCategories";

const HomePage = () => {
  const [category, setCategory] = useState<string>("all");
  const { isLoading, data: categories } = useCategories();

  return (
    <div className="flex flex-col gap-2">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Chose a category</span>
        </div>
        <select
          className="select select-bordered w-full"
          value="all"
          onChange={(event: any) => setCategory(() => event.target.value)}
        >
          <option value="all" selected>
            All
          </option>
          {!isLoading &&
            categories &&
            categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <div className="container max-w-7xl p-10">
        <ProductList category={category} />
      </div>
    </div>
  );
};

export default HomePage;
