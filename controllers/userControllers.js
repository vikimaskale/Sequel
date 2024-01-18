var db= require('../models');   //default it will take index file inside models
var User=db.user;

var addUser = async(req, res) => {
//   const jane = User.build({ firstName: "Jane", lastName: "Singh" });
  const jane = await User.create({ firstName: "Robin", lastName: "singh" });
  console.log(jane instanceof User); // true

  jane.set({
    firstName: "Ada",
    lastName: "Sharma"
  });
  await jane.save();

  console.log(jane.firstName);// "Jane"
  console.log(jane.toJSON()); // print all column for Jane in json form

//   await jane.save();
  console.log('Jane was saved to the database!');
  res.status(200).json(jane.toJSON());  //200-> success
};

module.exports={
    addUser
}
