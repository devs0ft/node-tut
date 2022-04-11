const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url==='/'){
        res.end('welcome to my homepage')
    } if(res.url==='/about'){
        res.end('welcome to the aboutpage')
    }res.end(`
       <h1>OOps</h1>
       <p>The page You are looking for cannot be found</p>
       <a href='/'>Back Home</a>
     `)
})
server.listen(5000)
