const Sequelize = require("sequelize");

if (process.env.ENVIRONMENT === 'production'){
    console.log("PRODUCTION")
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        {
            dialect:'postgres',
            host:process.env.DATABASE_HOST,
            port:process.env.DATABASE_PORT
        }
    )
    module.exports = sequelize;

} else {
    console.log("STAGING");
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,
        {
            dialect:"postgres",
            host:process.env.DATABASE_HOST_TESTE,
           port:process.env.DATABASE_PORT_TESTE
        }
    )
    module.exports = sequelize;
}