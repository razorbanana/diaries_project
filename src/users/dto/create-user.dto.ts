import { IsEmail, IsNotEmpty, IsBoolean, IsString, Min, MinLength, IsOptional} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @MinLength(8)
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsOptional()
    visible: boolean;
}