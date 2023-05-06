import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { PrismaService } from "src/common/prisma/prisma.service";

@Module({
  imports: [PrismaModule],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UserModule {}
