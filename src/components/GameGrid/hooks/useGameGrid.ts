import { Game } from "../types";
import useData from "../../../hooks/useData";
import { Genre } from "../../GenreList/types";

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])

export default useGames;