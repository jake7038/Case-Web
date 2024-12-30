import 'dotenv/config';

export default {
    client: "mysql",
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME

    },
    migrations: {
        tablename: "migration",
        directory: `${process.cwd()}/src/database/migrations` //__dirname não está disponivel no export. Por isso foi feito a troca para o process.cwd() para retornar o local do arquivo
    }
}