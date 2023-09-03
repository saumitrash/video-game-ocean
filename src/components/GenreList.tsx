import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  // const { genres } = useGenres();
  // const data = genres;

  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
