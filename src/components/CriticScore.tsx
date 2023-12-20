import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => (
  <Badge
    colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : ""}
    fontSize={"14px"}
    borderRadius={"4px"}
    paddingX={2}
  >
    {score}
  </Badge>
);

export default CriticScore;
