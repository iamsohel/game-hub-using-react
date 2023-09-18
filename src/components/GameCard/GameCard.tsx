import getCroppedImageUrl from '../../services/image-url';
import CriticScore from '../CriticScore';
import PlatformIconList from '../PlatformIconList';
import { GameProps } from './types';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

const GameCard = ({ game }: GameProps) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard