const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.register = (req, res) => {

const hashedPasswword = bcrypt.hashSync(req.body.password, 10);


  //console.log(req.body);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPasswword
  })
  newUser.save()
    .then((user) => {
      //dans le body du token, insérer l'ID du user et isAdmin
      //renvoyer en réponse uniquement le token
      var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      res.send(user)
    })
    .catch(err => {
      res.status(404).send(err)
    })
}

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found"
        })
      }
      res.send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.getOneUser = (req, res) => {
  User.findById(req.params.id).then((user) => {
    if (!user) {
      return res.status(404).send({
        message: "User not found"
      })
    }
    res.send(user);
  })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.deleteOneUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.send({ message: `user with id ${user._id} successfully deleted` }))
    .catch(err => res.status(400).send(err))
}

exports.getUsers = (req, res) => {
  User.find().then(
    (users) => {
      res.send(users)
    })
    .catch(err => res.send(err))
}