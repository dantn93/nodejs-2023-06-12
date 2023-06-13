const BOOKS = [
    { name: 'Tieng chim hot trong bui man gai', price: 200000 },
    { name: 'Chiec thuyen ngoai xa', price: 150000 },
    null
];
function getAllBooks(req, res) {
    res.send(BOOKS);
};

function getAllBookNames(req, res) {
    try {
        const nameList = BOOKS.map(e => e.name);
        res.json({
            error: null,
            result: nameList
        });
    } catch (error) {
        console.log(error.message);
        if(error.message.includes('Cannot read properties of null')) {
            res.status(500).json({
                error: error.message,
                result: null
            })
        }

        res.status(500).json({
            error: 'unknown',
            result: null,
            errorCode: "NEED_USER_NAME"
        })
    }
}

module.exports = {
    getAllBooks,
    getAllBookNames
}