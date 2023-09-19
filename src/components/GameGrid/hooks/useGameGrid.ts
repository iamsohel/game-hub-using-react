import { Game, Platform } from "../types";
import useData from "../../../hooks/useData";
import { Genre } from "../../GenreList/types";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id])

export default useGames;