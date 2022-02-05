import {Module} from "@nestjs/common";
import {FileController} from "./file.controller";
import {FileService} from "./file.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FileModel} from "../entity/file";


@Module({
    controllers: [FileController],
    providers: [FileService],
    imports: [TypeOrmModule.forFeature([FileModel], "nestJs")]
})
export class FileModule {}
