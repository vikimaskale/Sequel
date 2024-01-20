const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('employeedb', 'root', 'viki123', {
    host: 'localhost',
    dialect: 'mysql',  /*| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

    logging: false
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  var db={};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.DataTypes = DataTypes;
  db.Model= Model;
  db.user = require('./user')(sequelize, DataTypes, Model);
  db.contact = require('./contact')(sequelize, DataTypes);

  sequelize.sync({ force: false });

  module.exports= db;