const express = require("express");

const router = express.Router();


router.get('/', (req, res) => {

    res.render("homepage");

});
router.get('/admin', (req, res) => {

    res.render("admin");

});
router.get('/teacher', (req, res) => {

    res.render("teacher");

});



module.exports = router;