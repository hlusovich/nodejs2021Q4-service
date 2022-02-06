import {
    Injectable
} from '@nestjs/common';
import {hash} from 'bcrypt';
import {v4} from 'uuid';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import {UserModel} from '../entity/user';
import {UserDto} from './dto/user-dto';
import {Error404} from "../../Errors/404error";
import {InjectRepository} from "@nestjs/typeorm";
import {TokensService} from "../token/tokens.service";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserModel, "nestJs")
                private usersRepository: Repository<UserModel>, private tokensService:TokensService) {
    }
  /**
   * return  Array of Users
   * @param there is no param
   * @returns User[]
   */
    async getAll() {
        const result = await this.usersRepository.query('SELECT * FROM users');
        return result;
    }
  /**
   * return  User by id
   * @param id:string
   * @returns User or if no User with such id throw error
   */
    async getOne(id: string) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new Error404("this user doesn't exist")
        }
        return user;
    }
  /**
   * return  Fresh created User
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @param boardId:string
   * @returns User
   */
    async create(userDto: UserDto):
        Promise<UserDto> {
        const hashPassword = await hash(userDto.password, 3);
        const user = await this.usersRepository.create({...userDto, password: hashPassword, id: v4()});
        await user.save();
        if (userDto.login) {
            const token = this.tokensService.generateToken({login: user.login, id: user.id});
            await this.tokensService.saveToken(user.id, token);
        }
        delete user.password;
        return user;
    }
    /**
     * return  Fresh updated User
     * @param id:string
     * @param payload object with  fields title, id, order, description, boardId, userId, columnId
     * @returns User
     */

    async update(userDto: UserDto, id: string): Promise<UpdateResult | undefined> {
        const response = await this.usersRepository.update(id, {...userDto});
        if (response.affected === 0) {
            throw new Error404("this user doesn't exist")
        }
        return response;
    }

    /**
     * Delete user by id
     * @param id:string
     * @returns string with deleted board id
     */
    async delete(id: string): Promise<DeleteResult | undefined> {
        const response = await this.usersRepository.delete(id);
        if (response.affected === 0) {
            throw new Error404("this user doesn't exist")
        }
        return response;
    }
}
