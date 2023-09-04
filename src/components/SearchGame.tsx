import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchGame = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={15}
        placeholder="Search for a game..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchGame;
