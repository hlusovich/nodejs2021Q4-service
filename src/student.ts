import { BaseEntity, } from '../node_modules/typeorm/repository/BaseEntity.js';
import {Column} from '../node_modules/typeorm/decorator/columns/Column.js';
import {PrimaryColumn} from '../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import {Entity} from '../node_modules/typeorm/decorator/entity/Entity.js';
@Entity('students3')
export class User extends BaseEntity{
    constructor(id:number, first_name:string,last_name:string,age:number){
        super();
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age
    }
    @PrimaryColumn()
    id:number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
   age: number;
}
