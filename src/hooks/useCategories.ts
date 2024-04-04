import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../constants";
import axios from "axios";

const useCategories = () =>
  useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: () =>
      axios
        .get<string[]>(`${apiUrl}/products/categories`)
        .then((res) => res.data),
  });

export default useCategories;
