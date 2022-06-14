const express = require("express");
const Users = require("../schema/Users")
const router = express.Router();
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const { verfiyToken, verfiyUser, verifyAdmin } = require("./verfiyToken")

router.get("/users/auth/check", verfiyToken, (req, res, next) => {
    res.send("You are authenticated")
})
router.get("/users/auth/check/:id", verfiyUser, (req, res, next) => {
    res.send("You are authenticated")
})
router.get("/users/checkadmin", verifyAdmin, (req, res, next) => {
    res.send("You are authenticated")
})

//Post For Making A new User
router.post("/users", async (req, res, next) => {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10)
    const Post = new Users({
        username: req.body.name,
        password: hashedPassword
    })
    try {
        Post.save()
            .then((data) => res.json(data))
    } catch (err) {
        next(err)
    }
})

//LOG IN
router.post("/users/login", async (req, res, next) => {
    const allUsers = await Users.find();
    const User = await allUsers.filter((user) => user.username == req.body.name)
    if (User.length == 0) {
        res.send("No User with that Username")
    }
    try {
        if (await bcryptjs.compare(req.body.password, User[0].password)) {
            const token = jwt.sign({ id: User[0]._id, username: User[0].username, isAdmin: User[0].isAdmin }, "token-secret-key")
            res.cookie("access_token", token, { httpOnly: true }).send("Loged In")
        } else {
            res.send("Wrong Password")
        }
    } catch (err) {
        next(err)
    }
})
//Update
router.put("/users/:id", verfiyUser, async (req, res, next) => {
    try {
        const hashedPassword = await bcryptjs.hash(req.body.password, 10)
        const specificPostToUpdate = await Users.findByIdAndUpdate(
            req.params.id,
            {
                username: req.body.username,
                password: hashedPassword
            },
            { new: true }
        )
        res.json(specificPostToUpdate)
    } catch (err) {
        next(err)
    }
})
//Delete
router.delete("/users/:id", verfiyUser, async (req, res, next) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("post has been deleted")
    } catch (err) {
        next(err)
    }
})
//Get One Post 
router.get("/users/:id", verfiyUser, async (req, res, next) => {
    try {
        const Post = await Users.findById(req.params.id)
        res.json(Post);
    } catch (err) {
        next(err)
    }
})

//Get ALL
router.get("/users", verifyAdmin, async (req, res, next) => {
    try {
        const Posts = await Users.find()
        res.json(Posts)
    } catch (err) {
        next(err)
    }
})


module.exports = router;