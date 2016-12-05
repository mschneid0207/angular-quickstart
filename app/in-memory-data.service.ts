import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: "Markus"},
            {id: 12, name: "Nadine"},
            {id: 13, name: "Lukas"},
            {id: 14, name: "Franziska"},
            {id: 15, name: "Jonas"},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        return {heroes};
    }
}
