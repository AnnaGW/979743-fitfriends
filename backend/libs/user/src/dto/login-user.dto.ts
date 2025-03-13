import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { AuthenticationValidateMessage } from '../user.constant';
import { UserDtoValidation } from '../user.constant';
export class LoginUserDto {
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @IsString()
  @MinLength(UserDtoValidation.PasswordMinLength)
  @MaxLength(UserDtoValidation.PasswordMaxLength)
  public password: string;
}
