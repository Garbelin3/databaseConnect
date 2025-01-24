import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'cursododev',
  username: 'admin',
  password: 'admin,
  host: 'localhost',
  port: 3306,
});

export { sequelize };
