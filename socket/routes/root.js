var express = require('express');
var router = express.Router();

router.get('/a',(req,res)=>{
	res.send('succ')
})

module.exports=router