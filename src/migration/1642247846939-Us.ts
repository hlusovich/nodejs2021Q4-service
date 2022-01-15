import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Us1642247846939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "login",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                }
            ]
        }), true);
        await queryRunner.createTable(new Table({
            name: "tasks",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "userId",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "boardId",
                    type: "varchar",
                },
                {
                    name: "columnId",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "order",
                    type: "int",
                },

            ]
        }), true);
        await queryRunner.createTable(new Table({
            name: "boards",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "columns",
                    type: "text[]",
                }
            ]
        }), true);
        await queryRunner.createTable(new Table({
            name: "columns",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "order",
                    type: "int",
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
