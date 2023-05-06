import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { Auth } from "src/graphql";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string): Promise<Auth> {
    const user = await this.userService.findUser(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(email: string, password: string): Promise<Auth> {
    try {
      return await this.signIn(email, password);
    } catch (e) {
      const newUser = await this.userService.createUser({
        email: email,
        password: password,
      });

      const payload = {
        sub: newUser.id,
        email: newUser.email,
      };

      return {
        accessToken: await this.jwtService.signAsync(payload),
      };
    }
  }
}
