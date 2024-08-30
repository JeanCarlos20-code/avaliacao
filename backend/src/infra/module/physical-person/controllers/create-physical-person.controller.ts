import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePhysicalPersonService } from 'src/core/application/physical-person/create-physical-person';
import { PhysicalPersonDto } from '../dtos/physical-person.dto';
import { PhysicalPerson } from 'src/core/domain/class/physical-person';

@ApiTags('physical-person')
@Controller('physical-person')
export class CreatePhysicalPersonController {
  constructor(
    private createPhysicalPersonService: CreatePhysicalPersonService,
  ) {}

  @Post('')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create an indicator',
    isArray: true,
  })
  async create(@Body() body: PhysicalPersonDto) {
    await this.createPhysicalPersonService.execute(body as PhysicalPerson);
  }
}
