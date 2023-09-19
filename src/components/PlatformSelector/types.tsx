import { Platform } from "../GameGrid/types";

export interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}