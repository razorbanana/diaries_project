import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class UpdatePasswordDto {
    @ApiProperty({description: 'Old password of the user.', type: String, minLength: 8})
    @IsNotEmpty()
    @MinLength(8)
    oldPassword: string;

    @ApiProperty({description: 'New password of the user.', type: String, minLength: 8})
    @IsNotEmpty()
    @MinLength(8)
    newPassword: string;
}