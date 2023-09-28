import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length < 300) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, 300) + ". . .";
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        colorScheme="yellow"
        fontWeight="bold"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
