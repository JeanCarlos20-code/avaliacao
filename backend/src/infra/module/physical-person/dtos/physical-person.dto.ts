import { ApiProperty } from '@nestjs/swagger';
import { PhysicalPersonInterface } from 'src/core/domain/interface/physical-person-interface';
import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PhysicalPersonDto implements PhysicalPersonInterface {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsDateString()
  bornDate: Date;
}
