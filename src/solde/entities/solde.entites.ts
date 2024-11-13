import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Solde {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  solde: number;
}