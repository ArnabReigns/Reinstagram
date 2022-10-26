const express = require('express')
const db = require('./db')
const cors = require('cors');

const app = express();
const port = 3000;

const corsOpts = {
    origin: 'http://localhost:5173',
    credentials: true,
    sameSite: 'none',

};

app.use(cors(corsOpts));
app.use(function(req, res, next) {
res.header('Content-Type', 'application/json;charset=UTF-8')
res.header('Access-Control-Allow-Credentials', true)
res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
)
next()
})

app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.use('/api',require('./routes/accountsRoute'))
app.use(require('./routes/404handler'))



app.listen(port,()=>{

    console.log(`server started at http://localhost:${port}/`)
})

