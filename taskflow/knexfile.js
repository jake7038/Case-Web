export default {
    client: "mysql",
    connection: {
        user: "root",
        password: "1234",
        host: "localhost",
        port: "3306",
        database: "taskflowdb"

    },
    migrations: {
        tablename: "migration",
        directory: `${process.cwd()}/src/database/migrations` //__dirname não está disponivel no export. Por isso foi feito a troca para o process.cwd() para retornar o local do arquivo
    }
}