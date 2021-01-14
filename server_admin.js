const express = require('express')
// const https = require('https');
// const fs = require('fs');
const cors = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express()

const viewRouter = require('./routes/allViews')
require('dotenv').config()
const path = require('path') 

app.use(express.static(__dirname + '/public')) 

app.engine('.html',exphbs({
    extname : '.html'
}))

app.set('views', __dirname + '/views');
app.set('view engine','.html')

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

//CORS
if(process.env.NODE_ENV == 'development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}

app.use('/',viewRouter)
// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

const PORT = process.env.PORT || 7003 || '0.0.0.0';
// const PORT = process.env.PORT || 8003;
// https.createServer(options, app)
app.listen(PORT,()=>{
    console.log(`Admin is now running on Port ${PORT}`)
})






