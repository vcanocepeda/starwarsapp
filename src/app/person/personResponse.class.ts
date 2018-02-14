import {Person} from './person.class';

export interface PersonResponse {
    count: number;
    next: string;
    previous?: any;
    results: Person[];
}
