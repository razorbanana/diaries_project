import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsBoolean, IsString, Min, MinLength, IsOptional} from 'class-validator';

export class CreateUserDto {

    @ApiProperty({description: 'Name of the user.', type: String, minLength: 4})
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    name: string;

    @ApiProperty({description: 'Email of the user.', type: String, minLength: 8})
    @IsNotEmpty()
    @IsEmail()
    @MinLength(8)
    email: string;

    @ApiProperty({description: 'Password of the user.', type: String, minLength: 8})
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @ApiPropertyOptional({description: 'Visibility for other users of the user.', type: Boolean, default: false})
    @IsOptional()
    visible: boolean;
}