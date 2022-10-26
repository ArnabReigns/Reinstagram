const express = require("express");
const router = express.Router();

var html = 
    `<body style="box-sizing: border-box; padding: 0; margin: 0;"> 
        <div style=" width: 100vw; height: 100vh; display: flex; justify-content: center;align-items: center; background-color: rgb(40, 40, 40);">
            <h1 style="color: rgb(173, 173, 173); font-family: 'Arial';">404 NOT FOUND</h1>
        </div>  
    </body>`


router.get('*', function(req, res){
    res.send(html)
  });


module.exports = router;