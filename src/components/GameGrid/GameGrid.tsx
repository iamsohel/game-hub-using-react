import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from './hooks/useGameGrid';
import GameCard from '../GameCard/GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import GameCardContainer from '../GameCardContainer';
import { Props } from './types';

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data: games, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={3}>
                {isLoading && skeletons.map((skeleton) => (<GameCardContainer key={skeleton}> <GameCardSkeleton /> </GameCardContainer>))}
                {games.map((game) =>
                    (<GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>))}
            </SimpleGrid>
        </>

    )

}

export default GameGrid;