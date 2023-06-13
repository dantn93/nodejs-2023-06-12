const express = require('express');
const app = express();
const port = 3000;
const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const calculateRouter = require('./routes/calculate');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1/', bookRouter);
app.use('/v1/', userRouter);
app.use('/v1/calculate', calculateRouter);
app.post('/v1/data', (req, res) => {
    const data = req.body;
    console.log(JSON.stringify(data));
    res.send('OK');
})





// app.get('/message/:msg', (req, res) => {
//     let msg = req.params.msg;
//     console.log("Message: ", msg);
//     res.send('Message is sent...');
// })

// app.get('/', (request, response) => {
//     response.send('Hello 1234');
// });



app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})


// Xem Ip may minh tren may windows
// ipconfig
// 192.168....