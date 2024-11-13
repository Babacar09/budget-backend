import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Revenu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    montant: number;
}