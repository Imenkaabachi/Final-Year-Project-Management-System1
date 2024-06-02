import { IsNotEmpty, IsEnum, IsMongoId } from 'class-validator';
import { Section } from "../../../Domains/section.enum";

export class CreateDepartementDto {
  @IsNotEmpty()
  @IsEnum(Section)
  name: Section;

  @IsNotEmpty()
  @IsMongoId()
  director: string;
}
