
var express = require('express'),
    app = express(),
    router = express.Router();


router.use('/koda', require('./welcome'));
router.use('/koda',require('./learnDance'));
router.use('/koda',require('./helpLion'));

module.exports = router;
