const fs = require('fs');
fs.writeFile('welcome.txt','Hello Node','utf8',()=>{
    console.log('done')
})
fs.readFile('hello.txt','utf8',(err,data)=>{
    if(err)
    {console.log(err)}
    else{
    console.log(data)}
    
})