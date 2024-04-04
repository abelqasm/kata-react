import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../constants";
import { Product } from "../models/models";
import axios from "axios";

const useProducts = (category: string) =>
  useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: () =>
      axios
        .get<Product[]>(
          `${apiUrl}/products${
            category !== "all" ? `/category/${category}` : ""
          }`
        )
        .then((res) => res.data),
  });

export default useProducts;
