import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { HelloModule } from "./hello/hello.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth/constants";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/graphql.ts"),
        outputAs: "class",
      },
      playground: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
    HelloModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
