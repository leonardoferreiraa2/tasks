const bodyParser = require('body-parser')
const cors = require('cors')

// consign 

module.exports = app => {
  app.use(bodyParser.json())
  app.use(cors({
    origin: '*'
  }))
}