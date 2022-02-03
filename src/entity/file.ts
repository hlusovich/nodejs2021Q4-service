import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"


@Entity("files")
export class FileModel extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    originalname: string;
    @Column()
    data: string
}
