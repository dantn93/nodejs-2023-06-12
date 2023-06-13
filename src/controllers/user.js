function getAllUsers(req, res) {
    res.send([
        { name: 'Le Hoang Nam', age: 20 },
        { name: 'Le Van Viet', age: 31 }
    ]);
}

// v1/getUser/:userId
function getUserById(req, res) {
    const userId = req.params.userId;
    console.log("userID: ", userId);
    res.send({ userId });
}

// v1/getUserByNameAndAge?name=Nam&age=20
function getUserByNameAndAge(req, res) {
    // const { name, age } = req.query;
    const queryObject = req.query;
    console.log('queryObject: ', queryObject);
    console.log("Name: ". queryObject.name);
    console.log("Age: ", queryObject.age);
    res.send({
        name: queryObject.name,
        age: queryObject.age
    });
}

function createUser(req, res) {
    const { username, password, age } = req.body;
    res.send({
        username,
        password,
        age
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByNameAndAge,
    createUser
}