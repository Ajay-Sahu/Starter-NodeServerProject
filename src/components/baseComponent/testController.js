const testModel = require('./testModel');
let testController = {};


testController.testApi = (req, res) => {

    return res.json(200, {
        msg: "Inside test api"
    })

}

testController.demo = (req, res) => {

    res.send('Hello demo func...');
}


testController.auth = (req, res) => {

    var cred = testModel.find({}, '-_id')
    
    if (cred.length < 1) {
        res.status(200).json({ "auth": "fail" })
    }
    else {
        res.status(200).send({ "auth": "success" })
    }

}

module.exports = testController