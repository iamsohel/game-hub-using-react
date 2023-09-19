import { GameQuery } from './../../App';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
export interface FetchGamesResponse {
    count: number;
    results: Game[]
}

export interface Props {
    gameQuery: GameQuery
}