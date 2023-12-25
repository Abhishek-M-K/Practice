const express = require("express");
const router = express.Router();
// const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

// router.get("/", (req, res) => {}); instead of this we can do below using MVC
router.get("/", blogController.blog_index);

// router.post("/", (req, res) => {
//   // console.log(req.body);
// });
//use MVC for posting a new blog
router.post("/", blogController.blog_create_post);

// router.get("/create", (req, res) => {}); instead of this use MVC
router.get("/create", blogController.blog_create_get);

// router.get("/:id", (req, res) => {}); instead of this we can make use of MVC
router.get("/", blogController.blog_details);

// router.delete("/:id", (req, res) => {}); use MVC to del blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
