const typePlaceModel = require("../models/typePlace.model");

exports.createTypePlace = (req,res) => {
    const newtypePlace = new typePlace({
        name:req.body.name
    })
    newtypePlace.save().then(
        (typePlace) =>
            res.send(typePlace)
    )
    .catch(err => res.catch)
}