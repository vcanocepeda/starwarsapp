import {Planet} from './planet.class';

export interface PlanetResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}
