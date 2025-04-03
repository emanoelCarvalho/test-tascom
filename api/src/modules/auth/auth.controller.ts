import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './dto/auth-signin.dto';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signIn")
  singIn(@Body() AuthSignInDto: AuthSignInDto) {
    return this.authService.signIn(AuthSignInDto.email, AuthSignInDto.password);
  }
}
