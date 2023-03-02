const router = require("express").Router();
const { Post } = require("../../models");

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        });

        const posts = postData.map((title) => title.get({ plain: true }));

        res.render('post', {
        posts,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;