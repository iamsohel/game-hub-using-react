import useGenres from './hooks/useGenres'
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../../services/image-url';
import { GenreProps } from './types';

const GenreList = ({ onSelectedGenre }: GenreProps) => {
    const { data: genres, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />;
    return (
        <List>
            {genres.map(genre => <ListItem key={genre.id} paddingY="5px">
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
                </HStack>
            </ListItem>)}

        </List>
    )
}

export default GenreList