import PlatformIconList from '../PlatformIconList';
import { GameProps } from './types';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

const GameCard = ({ game }: GameProps) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard