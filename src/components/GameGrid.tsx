import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/UseGenre";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  // Fetch games using the useGames hook
  const { data, error, isLoading } = useGames(gameQuery);

  // An array to generate multiple skeletons for loading state
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 9];

  return (
    <>
      {/* Display an error message if there's an error */}
      {error && <text>{error}</text>}

      {/* Use SimpleGrid to create a responsive grid layout */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {/* Display skeletons when loading */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {/* Display game cards when not loading */}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
