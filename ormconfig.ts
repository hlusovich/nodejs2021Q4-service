import {
    Connection,
    ConnectionOptions,
    createConnection,
    QueryRunner
} from 'typeorm';
import {DB,POSTGRES_PASSWORD,PORT,POSTGRESS_PORT,SUPER_USER}from './config.js'


const config: ConnectionOptions = {
    type: 'postgres',
    host: "localhost",
    username: SUPER_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRESS_PORT,
    database: DB,
    synchronize: false,
    logging: false,
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


const dbCreater = async ()=>{
    const connection:Connection = await createConnection({
        name:"sdf",
        type: 'postgres',
        host: "localhost",
        username: SUPER_USER,
        password: POSTGRES_PASSWORD,
        port: POSTGRESS_PORT,
        database: "postgres"
    });
    const queryRunner: QueryRunner = connection.createQueryRunner();
    await queryRunner.createDatabase(DB, true);
    setTimeout(()=>process.exit(0),1000);
    return  config;
};
export = dbCreater();

