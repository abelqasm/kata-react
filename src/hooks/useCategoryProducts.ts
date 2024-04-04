import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../constants";
import { Product } from "../models/models";
import axios from "axios";

const useCategoryProducts = (category: string) =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get<Product[]>(`${apiUrl}/products/category/${category}`)
        .then((res) => res.data),
  });

export default useCategoryProducts;
