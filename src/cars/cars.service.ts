import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Hyundai',
            model: 'i10'
        },
        {
            id: uuid(),
            brand: 'Kia',
            model: 'Rio 5'
        },
    ];

    findAll() {
        return this.cars;
    };

    findOneById(id: string) {

        const car = this.cars.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id ${ id } not found`);

        return car;
        
    }

}
