import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Depense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    montant: number;
}