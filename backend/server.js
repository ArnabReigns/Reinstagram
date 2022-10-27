const express = require('express')
const db = require('./db')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {UserModel}= require('./models/UserModel')

const app = express();
const port = 3000;

const corsOpts = {
    origin: 'http://localhost:5173',
    credentials: true,
    sameSite: 'none',
    
};
app.use(require('./routes/404handler'))

app.use(cookieParser('A very very secret'));
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

const autherization = (req,res,next) =>{

    const username = req.signedCookies['loggedin'];
    UserModel.findOne({username:username},"-_id -__v -password").then(user=>{
        req.user = user;
        console.log("from middleware "+user);
        next();
    }).catch(err=> req.user = null)
    
}

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(autherization)
app.use('/api',require('./routes/accountsRoute'))



app.listen(port,()=>{
    
    console.log(`server started at http://localhost:${port}/`)
})

