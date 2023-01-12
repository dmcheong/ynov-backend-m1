function verifyAdmin(req, res, next) {
    if (!req.userToken.isAdmin) {
        return res.status(401).send({
            auth: false,
            message: "you must be an admin"
        })
    }
    next();
}

module.exports = verifyAdmin;