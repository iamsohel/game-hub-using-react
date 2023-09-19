import { Game } from "../types";
import useData from "../../../hooks/useData";
import { GameQuery } from "../../../App";

const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
    { params: { genres: gameQuery?.genre?.id, platforms: gameQuery?.platform?.id, ordering: gameQuery.sortOrder } }, [gameQuery])

export default useGames;