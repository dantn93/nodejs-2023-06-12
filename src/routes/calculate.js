const express = require('express');
const router = express.Router();

router.get('/division', (req, res) => {
    const { a, b } = req.query;
    const intA = parseInt(a);
    const intB = parseInt(b);
    if(intB == 0) {
        res.status(400).json({
            error: 'b must differ 0',
            result: null
        })
    }
    const result = a / b;
    res.json({
        error: null,
        result: result
    })
})

module.exports = router;