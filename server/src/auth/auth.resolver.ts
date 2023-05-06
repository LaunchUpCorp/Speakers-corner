import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthInput } from "src/graphql";
import { Public } from "./decorator/public.decorator";

@Resolver("auth")
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Query("signIn")
  async signIn(@Args("authInput") authInput: AuthInput) {
    return this.authService.signIn(authInput.email, authInput.password);
  }

  @Public()
  @Mutation("signUp")
  async signUp(@Args("authInput") authInput: AuthInput) {
    return this.authService.signUp(authInput.email, authInput.password);
  }
}
