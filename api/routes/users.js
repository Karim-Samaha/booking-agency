const express = require("express");
const Users = require("../schema/Users")
const router = express.Router();

//Post
router.post("/users", async (req, res) => {
    const Post = new Users({
        username: req.body.name,
        password: req.body.description
    })
    try {
        Post.save()
            .then((data) => res.json(data))
    } catch (err) {
        res.status(500).json(err)
    }
})
//Update
router.put("/users/:id", async (req, res) => {
    try {
        const specificPostToUpdate = await Users.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.json(specificPostToUpdate)
    } catch (err) {
        res.status(500).json(err)
    }
})
//Delete
router.delete("/users/:id", async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("post has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})
//Get One Post 
router.get("/users/:id", async (req, res) => {
    try {
        const Post = await Users.findById(req.params.id)
        res.json(Post);
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get ALL
router.get("/users", async (req, res, next) => {
    try {
        const Posts = await Users.find()
        res.json(Posts)
    } catch (err) {
        next(err)
    }
})


module.exports = router;