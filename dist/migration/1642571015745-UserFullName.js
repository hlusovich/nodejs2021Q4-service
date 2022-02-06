"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFullName1642412577744 = void 0;
const typeorm_1 = require("typeorm");
class UserFullName1642412577744 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'login',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'tasks',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'userId',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'boardId',
                    type: 'varchar',
                },
                {
                    name: 'columnId',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'order',
                    type: 'int',
                },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'boards',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'columns',
                    type: 'text[]',
                },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'columns',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'order',
                    type: 'int',
                },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'tokens',
            columns: [
                {
                    name: 'userId',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'token',
                    type: 'varchar',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
        await queryRunner.dropTable('boards');
        await queryRunner.dropTable('tasks');
        await queryRunner.dropTable('columns');
    }
}
exports.UserFullName1642412577744 = UserFullName1642412577744;
//# sourceMappingURL=1642571015745-UserFullName.js.map