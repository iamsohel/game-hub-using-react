import { Game } from "../types";
import useData from "../../../hooks/useData";

const useGames = () => useData<Game>('/games')

export default useGames;