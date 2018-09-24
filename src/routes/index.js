const test = require('../components/baseComponent/testRoute')
// const user = require('../components/baseComponent/testRoute')





module.exports = (app) => {
    app.use("/test", test);
    // app.use("/test", test);
}