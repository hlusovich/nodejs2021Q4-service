import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserFullName1642412577743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        await queryRunner.createTable(new Table({
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
        await queryRunner.createTable(new Table({
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
        await queryRunner.createTable(new Table({
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
        await queryRunner.createTable(new Table({
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
        await queryRunner.dropTable('boards');
        await queryRunner.dropTable('tasks');
        await queryRunner.dropTable('columns');
    }

}
