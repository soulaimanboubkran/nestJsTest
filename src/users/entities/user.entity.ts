import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    userName: string;




    @Column()
    password: string;

    @Column({nullable:true})
    role: string;

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile;
}