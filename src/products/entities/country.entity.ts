import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Country{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    country:string;
    @JoinTable()
    @ManyToMany(type=> Product,
        product => product.countries)
    products:Product[]
}