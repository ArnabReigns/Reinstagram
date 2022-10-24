const express = require('express')
const db = require('./db')

const app = express();
const port = 3000;

app.get('/',)
app.use('/api',require('./routes/accountsRoute'))
app.use(require('./routes/404handler'))



app.listen(port,()=>{

    console.log(`server started at http://localhost:${port}/`)
})

