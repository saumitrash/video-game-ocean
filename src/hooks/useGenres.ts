// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
// Same can be done for Platforms and SortOrder components
// const useGenres = () => ({ data: genres, isLoading: false, error: false });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
