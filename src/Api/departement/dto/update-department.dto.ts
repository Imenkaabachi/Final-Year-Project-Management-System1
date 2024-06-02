import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartementDto } from './create-department.dto';

export class UpdateDepartementDto extends PartialType(CreateDepartementDto) {}
