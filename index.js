// console.log('Hello Nonto');
// var {addition}=require('./addition.js');
// addition(3,6);
// addition(61,10);
// addition(14,30);

// var http=require('http');
// //port 
// var port = parseInt(process.env.port)
// || 4000;
// //web server
// http.createServer((req,res)=>{
//     const currUrl = req.url;
//     console.log('Url: ', currUrl, '\nMethod: ', req.method);
//     res.writeHead(200, {'Content-type': 'text/html'});
//     switch(currUrl) {
//         case '/':
//             res.end('<body><h1>You are home</h1></body>');
//         break
//         case '/about':
//             res.end('<body><h1>About me page</h1></body>');
//         break
//         case '/data':
//             res.end('<body><h1>Page data</h1></body>');
//         break
//         default:
//             res.end('Page / content was not found');
//     }}).listen(port,()=>{
//         console.log(`server is running at port ${port}`)
//     })

//express app
const express = require('express')
const app = express()
const port = parseInt(process.env.port)||3001
const route = express.Router();
app.use(route)
route.get('/',(req,res)=> 
{res.status(200).send('<h1>Well done!</h1>')})   


// app.get('/', (req, res) => res.send('<h1>Hey there nonto</h1>'))

app.listen(port, () => console.log(`App listening on port ${port}!`))
