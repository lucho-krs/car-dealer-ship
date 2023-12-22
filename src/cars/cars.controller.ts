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
import { UpdateCarDTO } from './dto/update-car.dto';

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
        return this.carService.findOneById( id );
    }

    @Post()
    createCar( @Body() createCarDTO: CreateCarDTO ) {
        return this.carService.create( createCarDTO );
    }

    @Patch(':id')
    updateCar( 
        @Param( 'id', ParseUUIDPipe ) id: string,
        @Body() updateCarDTO: UpdateCarDTO
    ) {
        return this.carService.update( id, updateCarDTO );
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
        return this.carService.delete( id );
    }

}
