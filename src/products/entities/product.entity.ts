import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country} from './country.entity';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    price:number;

    @JoinTable()
    @ManyToMany(type=> Country,
        country => country.products,{cascade:true})
    countries:Country[]    
    


}