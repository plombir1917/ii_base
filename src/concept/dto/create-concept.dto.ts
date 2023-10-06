import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateConceptDto {
  @IsOptional()
  @IsString()
  order: string;

  @IsOptional()
  @IsString()
  platform: string;

  @IsOptional()
  @IsString()
  developer: string;

  @IsOptional()
  @IsString()
  language: string;

  @IsOptional()
  @IsString()
  os: string;

  @IsOptional()
  @IsString()
  framework: string;

  @IsOptional()
  @IsString()
  interface: string;

  @IsOptional()
  @IsString()
  db: string;

  @IsOptional()
  @IsBoolean()
  s: boolean;

  @IsOptional()
  @IsBoolean()
  sp: boolean;

  @IsOptional()
  @IsBoolean()
  t: boolean;

  @IsOptional()
  @IsBoolean()
  v: boolean;

  @IsOptional()
  @IsBoolean()
  o: boolean;

  @IsOptional()
  @IsBoolean()
  pi: boolean;

  @IsOptional()
  @IsBoolean()
  is: boolean;

  @IsOptional()
  @IsBoolean()
  pbd: boolean;

  @IsOptional()
  @IsBoolean()
  sbd: boolean;

  @IsOptional()
  @IsBoolean()
  pr: boolean;

  @IsOptional()
  @IsBoolean()
  vp: boolean;

  @IsOptional()
  @IsBoolean()
  pp: boolean;

  @IsOptional()
  @IsBoolean()
  zz: boolean;
}
