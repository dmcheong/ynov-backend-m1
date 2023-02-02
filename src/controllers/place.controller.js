const Place = require ("../models/place.models");

exports.createPlace = (req,res) => {
  
}

exports.PlaceUpdate = (req,res) => {
    User.findByIdAndUpdate(req.placeToken.id, req.body, { new: true })
    .then((place) => {
      if (!place) {
        return res.status(404).send({
          message: "Place not found"
        })
      }
      res.send(place)
    })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.getOnePlace = (req, res) => {
  //console.log(req)
  Place.findById(req.placeToken.id).then((place) => {
    if (!place) {
      return res.status(404).send({
        message: "Place not found"
      })
    }
    res.send(place);
  })
    .catch(err => {
      res.status(400).send(err)
    })
}

exports.deleteOnePlace = (req, res) => {
    Place.findByIdAndDelete(req.params.id)
    .then(place => res.send({ message: `place with id ${place._id} successfully deleted` }))
    .catch(err => res.status(400).send(err))
}

exports.getPlaces = (req, res) => {
    Place.find().then(
    (places) => {
      res.send(places)
    })
    .catch(err => res.send(err))
}
