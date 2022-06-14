const express = require("express");
const Hotel = require("../schema/Hotel")
const { verfiyToken, verfiyUser, verifyAdmin } = require("./verfiyToken")

const router = express.Router();
//Post
router.post("/hotels", verifyAdmin, async (req, res, next) => {
    const Post = new Hotel(req.body)
    try {
        Post.save()
            .then((data) => res.json(data))
    } catch (err) {
        next(err)
    }
})
//Update
router.put("/hotels/:id", verifyAdmin, async (req, res, next) => {
    try {
        const specificPostToUpdate = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.json(specificPostToUpdate)
    } catch (err) {
        next(err)
    }
})
//Delete
router.delete("/hotels/:id", verifyAdmin, async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("post has been deleted")
    } catch (err) {
        next(err)
    }
})
//Get One Post 
router.get("/hotels/:id", async (req, res, next) => {
    try {
        const Post = await Hotel.findById(req.params.id)
        res.json(Post);
    } catch (err) {
        next(err)
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