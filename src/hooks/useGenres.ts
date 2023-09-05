// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
// Same can be done for Platforms and SortOrder components
const useGenres = () => ({ data: genres, isLoading: false, error: false });

export default useGenres;
