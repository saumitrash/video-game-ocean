import usePlatforms from "./usePlatforms";

export const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};
