var express = require('express');
var router = express.Router();
const files = require('../src/components/fileUpload/fileUploadRoutes')


/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });

// });


// router.get('/files', files)

// module.exports = router

module.exports = (app) => {

  //Test node 
  app.get('/', (req, res) => {
    res.status(200).json({ Message: "Welcome to Node project !", })
  }),

    app.use('/files', files)
};
