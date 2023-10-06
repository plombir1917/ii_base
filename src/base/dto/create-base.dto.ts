import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBaseDto {
  @IsString()
  @IsNotEmpty()
  rule: string;
}
