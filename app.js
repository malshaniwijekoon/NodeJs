//basic
//------
// var msg = 'Hello World';
// console.log(msg);

//fuction
//-------
// function sum(a,b){
//     return a+b;
// }
//const total = sum(1,2);
//console.log("Total: ", total);

//import fuction from helper.js
//------------------------------
// console.log("Process: ", process);
// const helper = require("./helper");
// const total = helper.sum(1,2);
// console.log("Total: ", total);

//arrow function
//---------------
// const arrow = require("./arrowFunc"); //import file
// const total = arrow.sum(1,4);
// console.log("Total: ", total);

// const total2 = arrow.sum2(1,4);
// console.log("Total: ", total2);

//object destructuring
// --------------------
// const {sum2, sub} = require("./objectDestructuring");
// const total = sum2(10,20);
// console.log("Total: ", total);

// const subTotal = sub(12,2);
// console.log("Sub Total: ", subTotal);

//Module (import 3rd party modules)
//----------------------------------
// const http = require("http");
// const server = http.createServer((req, res)=>{
//     res.end("Hello Node Updated")
// });
// server.listen(3000);

//event loop
//-------------
// const fs = require('fs');
// const fileName = "target.txt";
// fs.watch(fileName, ()=> console.log('File Changed'));

// asynchronuos
//--------------
// const fs = require('fs');
// const fileName = "target.txt";
// fs.readFile(fileName, (err, data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log("Node is async proggraming");

//asynchronuos 2
//---------------
// const fs = require('fs');
// const fileName = "target.txt";
// const data = fs.readFileSync(fileName);
// console.log(data.toString());
// console.log("Node is async proggraming");

//functional approach
//--------------------
// const fs = require('fs');
// const fileName = "target.txt";
// const errHandler = err => console.log(err);
// const dataHandler = data => console.log(data.toString());
// fs.readFile(fileName, (err, data)=> {
//     if(err) errHandler(err);

//     dataHandler(data);
// });
// console.log("Node is async proggraming");

//express
//--------
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello Express')
// })

// const port = 3000;
// app.listen(port, () =>{
//     console.log(`port: ${port}`);
// }); //app.listen(3000)

// express routes
// ---------------
// const express = require('express');
// const app = express();
// const postRoute = require('./api');
// app.get('/', postRoute.getPost);
// app.listen(3000);

// express routes morgan package
// -----------------------------
// const express = require('express');
// const app = express();
// const morgan = require('morgan'); // npm package morgan
// const {getPost} = require('./api');
// app.get('/', getPost);
// app.listen(3000);

// express routes middleware
// // -----------------------
// const express = require('express');
// const app = express();
// const morgan = require('morgan'); // npm package morgan
// const {getPost} = require('./api');
// app.use(morgan("dev")); //middleware
// app.get('/', getPost);
// app.listen(3000);

// express routes own middleware
// -----------------------------
// const express = require('express');
// const app = express();
// const morgan = require('morgan'); // npm package morgan
// const {getPost} = require('./api');
// const myOwnMiddleware = (req, res, next) => { //custom middleware
//     console.log("Middleware");
//     next();
// };
// app.use(morgan("dev")); //middleware
// app.use(myOwnMiddleware);
// app.get('/', getPost);
// app.listen(3000);

// express routes controllers
// ---------------------------
// const express = require('express');
// const app = express();
// const morgan = require('morgan'); // npm package morgan
// const postRoute = require('./api');
// app.use(morgan('dev'));
// app.use("/", postRoute);
// app.listen(3000);

//Json
//-----
const express = require('express');
const app = express();
const morgan = require('morgan'); // npm package morgan
const postRoute = require('./api');
app.use(morgan('dev'));
app.use("/", postRoute);
app.listen(3000);

