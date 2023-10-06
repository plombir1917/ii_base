import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Concept {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: string;

  @Column()
  platform: string;

  @Column()
  developer: string;

  @Column()
  language: string;

  @Column()
  os: string;

  @Column()
  framework: string;

  @Column()
  interface: string;

  @Column()
  db: string;

  @Column()
  s: boolean;

  @Column()
  sp: boolean;

  @Column()
  t: boolean;

  @Column()
  v: boolean;

  @Column()
  o: boolean;

  @Column()
  pi: boolean;

  @Column()
  is: boolean;

  @Column()
  pbd: boolean;

  @Column()
  sbd: boolean;

  @Column()
  pr: boolean;

  @Column()
  vp: boolean;

  @Column()
  pp: boolean;

  @Column()
  zz: boolean;
}
