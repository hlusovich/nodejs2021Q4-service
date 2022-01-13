import { join } from 'path';
export const config = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "nikita3",
    password: "7081379",
    database: "tester2",
    entities: [join(__dirname, 'src/models/**/*.{.js, .ts}')],
    migrationsRun: true,
    cli: {
        migrationsDir: 'migrations',
    }
};
