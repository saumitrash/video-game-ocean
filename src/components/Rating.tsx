import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Rating = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize={16} borderRadius={5} paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default Rating;
