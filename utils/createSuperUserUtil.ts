import { ConnectionOptions, createConnection } from 'typeorm';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import {
  DB, JWT_SECRET_KEY, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER,
} from '../config';
import { TaskModel } from '../src/entity/task';
import { UserModel } from '../src/entity/user';
import { BoardModel } from '../src/entity/board';
import { TokensModel } from '../src/entity/tokens';
import { FileModel } from '../src/entity/file';

const testUser = {
  login: 'admin', name: 'admin', password: 'admin', id: '1',
};
const options: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  username: SUPER_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRESS_PORT,
  synchronize: true,
  database: DB,
  entities: [TaskModel, UserModel, BoardModel, TokensModel, FileModel],
};
export async function createSuperUser() {
  await createConnection(options).then(async (serverInstance) => {
    if (!await UserModel.findOne(testUser.id)) {
      const hashPassword = await hash(testUser.password, 3);
      const user = await UserModel.create({ ...testUser, password: hashPassword });
      await user.save();
      const accessToken = sign({ login: testUser.login, userId: testUser.id }, JWT_SECRET_KEY);
      const tokenData = await TokensModel.findOne({ userId: testUser.id });
      if (tokenData) {
        return;
      }
      const createdTokenData = await TokensModel.create(
        { userId: testUser.id, token: accessToken },
      );
      await createdTokenData.save();
    }
  });
}
