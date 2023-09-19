import { Genre } from "../types";
import useData from "../../../hooks/useData";

const useGenres = () => useData<Genre>('/genres')
export default useGenres;