var express = require('express');
var router = express.Router();

router.get('/tech', function (req, res, next) {
    res.json(
        [
            { tech: "Aurelia" },
            { tech: "Node" }
        ]
    );
});

module.exports = router;