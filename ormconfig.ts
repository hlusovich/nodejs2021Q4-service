import {ConnectionOptions} from 'typeorm';


const config: ConnectionOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "nikita3",
    password: "7081379",
    database: "tester44",
    synchronize: true,
    logging:false,
    entities: ["src/entity/*.js"],
    cli: {
        migrationsDir: "src/migration",
        entitiesDir: "src/entity",

        subscribersDir: "src/subscriber"
    },
    migrations: [
        "src/migration/**/*.ts"
    ],
};
// npm run typeorm:cli -- migration:run
// npm run typeorm:cli -- migration:create -n UserFullName


// @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'SET NULL' })
// @JoinColumn({ name: 'userId' })
// user!: User;
export = config;
