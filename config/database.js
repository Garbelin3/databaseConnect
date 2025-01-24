import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'cursododev',
  username: 'admin',
  password: 'adminsql',
  host: 'cursododev.ctgeecgy4tk9.us-east-1.rds.amazonaws.com',
  port: 3306,
});

export { sequelize };
