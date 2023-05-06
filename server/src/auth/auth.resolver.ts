import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { Auth, AuthInput } from "src/graphql";

@Resolver("auth")
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => Auth)
  async signIn(@Args("authInput") authInput: AuthInput) {
    return this.authService.signIn(authInput.email, authInput.password);
  }

  @Mutation((returns) => Auth)
  async signUp(@Args("authInput") authInput: AuthInput) {
    return this.authService.signUp(authInput.email, authInput.password);
  }
}
