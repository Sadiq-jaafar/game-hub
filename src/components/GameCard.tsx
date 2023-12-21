import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore"; // Adjust the path based on the actual location of the CriticScore component

import { HStack } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={game.background_image} alt={game.name}></Image>

    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>
      <HStack justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;
