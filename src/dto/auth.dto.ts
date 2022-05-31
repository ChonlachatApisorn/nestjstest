import { IsString, MinLength, MaxLength } from 'class-validator';

export class AuthDTO {

    @IsString()
    @MinLength(4)
    @MaxLength(16)
    readonly username: string;
    
    @IsString()
    @MinLength(8)
    @MaxLength(30)
    readonly password: string;
}