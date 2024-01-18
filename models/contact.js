module.exports=(sequelize, DataTypes)=>{
// const {DataTypes} = require('sequelize');
// const sequelize = require('./index');


const Contact = sequelize.define('Contact', {
  // Model attributes are defined here
  permanent_Address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  current_Address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'contacts'
});
return Contact;

}