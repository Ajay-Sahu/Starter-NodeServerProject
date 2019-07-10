const mongoose = require('mongoose')
const schema = mongoose.schema;

let fileUploadSchema = new schema({

  fileName: { type: String, default: "" },
  filePath: { type: String, default: "" },
  


},
  {
    timestamps: { createdAt: 'createdAt', lastUpdated: 'lastUpdated' }
  })

module.exports = mongoose.model('files', fileUploadSchema)