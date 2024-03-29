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
  res.status(200).json(jane.toJSON());  //200-> success-> this will print data on brouser
};

var getUsers = async(req, res) =>{
  const data = await User.findAll({});
  res.status(200).json({data:data});
}

var getUser = async(req, res) =>{
  const data = await User.findOne({
    where: {
      id:req.params.id
    }
  });
  res.status(200).json({data:data});
}

var postUsers = async(req, res) =>{
  var postData=req.body;
  if(postData.length>1){
    var data = await User.bulkCreate(postData);
  }else{
    var data = await User.create(postData);
  }
  res.status(200).json({data:data});
}

var deleteUser = async(req, res) =>{
  var data = await User.destroy({
    where: {
      id:req.params.id
    }
  });
  res.status(200).json({data:data});
}

var patchUser = async(req, res) =>{
  var updatedData=req.body;
  var data = await User.update(updatedData, {
    where: {
      id:req.params.id
    }
  });
  res.status(200).json({data:data});
}

module.exports={
    addUser,
    getUsers,
    getUser,
    postUsers,
    deleteUser,
    patchUser
}
