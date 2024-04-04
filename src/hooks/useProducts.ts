import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../constants";
import { Product } from "../models/models";
import axios from "axios";

const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      axios.get<Product[]>(`${apiUrl}/products`).then((res) => res.data),
  });

export default useProducts;
