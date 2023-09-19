import useData from "../../../hooks/useData";
import { Platform } from "../../GameGrid/types";

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;