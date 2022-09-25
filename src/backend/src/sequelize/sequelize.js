import {Sequelize} from 'sequelize';

const {DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD,
  DATABASE_HOST} = process.env;

/**
 * Gets sequelize instance.
 * @return {Sequelize} Sequelize instance to database connection.
 */
async function getSequelize() {
  const sequelize = new Sequelize(DATABASE_NAME,
      DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: DATABASE_HOST,
        dialect: 'mysql',
      });


  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export default getSequelize();
