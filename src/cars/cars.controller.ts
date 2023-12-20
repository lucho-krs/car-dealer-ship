import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    ParseIntPipe, 
    ParseUUIDPipe, 
    Patch, 
    Post, 
    UsePipes, 
    ValidationPipe 
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe ) id: string ) {
        console.log({id})
        return this.carService.findOneById( id );
    }

    @Post()
    createCar( @Body() createCarDTO: CreateCarDTO ) {
        return createCarDTO;
        
    }

    @Patch(':id')
    updateCar( 
        @Param( 'id', ParseIntPipe ) id: string,
        @Body() body: any
    ) {
        return {id, body};
        
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: string ) {
        return {
            method: 'DELETE',
            id
        };
        
    }

}
