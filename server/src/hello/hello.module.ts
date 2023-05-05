import { Module } from "@nestjs/common";
import { HelloResolver } from "src/hello/hello.resolver";

@Module({
    providers: [HelloResolver],
    exports: [HelloResolver]
})
export class HelloModule { }