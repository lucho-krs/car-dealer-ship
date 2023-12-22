import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dto';

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
        
    };

    create( createCarDTO: CreateCarDTO ) {

        const car: Car = {
            id: uuid(),
            ...createCarDTO
        }

        this.cars.push( car );
        return car;

    };

    update( id: string, updateCarDTO :UpdateCarDTO ) {
        
        let carDB = this.findOneById( id );

        if ( updateCarDTO.id && updateCarDTO.id !== id) 
            throw new BadRequestException('Car id is not valid inside body')

        this.cars = this.cars.map( car => {

            if ( car.id === id ) {
                carDB = {
                    ...carDB,
                    ...updateCarDTO,
                    id
                }

                return car;
            }
            
        });

        return carDB;

    };

    delete( id: string ) {

        this.findOneById( id );
        this.cars = this.cars.filter( car => car.id !== id );

    }

}
