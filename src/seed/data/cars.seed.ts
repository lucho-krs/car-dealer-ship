import { Car } from "src/cars/interface/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Kia',
        model: 'Rio 5'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    }
];