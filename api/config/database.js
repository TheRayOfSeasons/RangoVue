import Sequelize from 'sequelize';

const db = new Sequelize(
  process.env.DB_DEV_DATABASE,
  process.env.DB_DEV_USERNAME,
  process.env.DB_DEV_PASSWORD,
  {
    host: process.env.DB_DEV_HOST || 'localhost',
    dialect: process.env.DB_DEV_DIALECT || 'postgres',
    operatorAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

export default db;
