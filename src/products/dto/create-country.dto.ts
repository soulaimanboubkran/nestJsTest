import { IsNumber, IsString } from "class-validator";

export class createCountry{
   @IsString()
   readonly country: string;

  
}