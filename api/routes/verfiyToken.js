const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
//Verfiy
 const verfiyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        res.send("Your Are Not Authenticated")
    }
    jwt.verify(token, "token-secret-key", (err, user) => {
        if (err) {
            next(err)
        }
        req.user = user;
        console.log(user)
        next();
    })
}
 const verfiyUser = (req, res, next) => {
    verfiyToken(req, res, () => {
        if (req.user.id == req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.send("You are not Authorized")
        }
    })
}

 const verifyAdmin = (req, res, next) => {
    verfiyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.send("You are not Authorized")
        }
    })
}

module.exports = { verfiyToken, verfiyUser, verifyAdmin };