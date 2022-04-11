const http = require('http');

const server = http.createServer((req, res)=>{
      if(req.url === '/'){
          res.end('welcome to our homepage')
      }
       if(req.url === '/about'){
          res.end('welcome to our about page')
      } 
      res.end(`
        <h1>oops</h1>
        <p>The request You are looking for cannot be found</p>
        <a href='/'>Back Home</a>
      `)
})
server.listen(5000)