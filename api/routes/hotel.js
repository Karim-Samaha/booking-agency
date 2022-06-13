const express = require("express");
const Hotel = require("../schema/Hotel")

const router = express.Router();
//Post
router.post("/hotels", async (req, res) => {
    const Post = new Hotel({
        name: req.body.name,
        description: req.body.description
    })
    try {
        Post.save()
            .then((data) => res.json(data))
    } catch (err) {
        res.status(500).json(err)
    }
})
//Update
router.put("/hotels/:id", async (req, res) => {
    try {
        const specificPostToUpdate = await Hotel.findByIdAndUpdate(
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
router.delete("/hotels/:id", async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("post has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})
//Get One Post 
router.get("/hotels/:id", async (req, res) => {
    try {
        const Post = await Hotel.findById(req.params.id)
        res.json(Post);
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get ALL
router.get("/hotels", async (req, res, next) => {
    try {
        const Posts = await Hotel.find()
        res.json(Posts)
    } catch (err) {
        next(err)
    }
})

module.exports = router;