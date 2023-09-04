import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  // const { genres } = useGenres();
  // const data = genres;
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button
              variant="link"
              fontWeight={selectedGenre?.id == g.id ? "bold" : "normal"}
              fontSize="lg"
              paddingY={2}
              onClick={() => onSelectGenre(g)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
