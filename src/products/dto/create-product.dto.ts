import { IsNumber, IsString } from "class-validator";

export class createProduct{
   @IsString()
   readonly title: string;

   @IsNumber()
   readonly price: number;
}