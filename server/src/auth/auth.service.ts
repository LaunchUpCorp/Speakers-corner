import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { Auth } from "src/graphql";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  private readonly saltOrRounds = 10;

  async signIn(email: string, password: string): Promise<Auth> { 
    const user = await this.userService.findUser(email);
    
    // Check if the password matched with the hased password saved in db. If not, return Unauthorized response.
    if(!await bcrypt.compare(password, user?.password)) {
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
      const hashedPassword = await bcrypt.hash(password, this.saltOrRounds);
      console.log(hashedPassword);
      
      const newUser = await this.userService.createUser({
        email: email,
        password: hashedPassword,
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
