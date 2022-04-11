const {readFile,write, writeFile} = require('fs')
readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.log(err);
        return
    } const first = result;
    readFile('./content/second.txt',(err,result)=>{
        if(err){
            console.log(err);
            return
        } const second = result;
        writeFile('./content/results-sync.txt','here is the final most result',(err,result)=>{
            if(err){
                console.log(err);
                return
            } console.log(result);
        })
    })
})