const mongoose = require('mongoose')
require('dotenv').config({path: './config/dev.env'})

mongoose.connect(process.env.MONGOOSE_URL)