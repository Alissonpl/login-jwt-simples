const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes');

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(cors());
 
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.use(routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Credentials', "*");
   res.header('Access-Control-Expose-Headers', headers['x-acess-token'], 'x-acess-token');
   // res.header('Access-Control-Expose-Headers', 'x-acess-token'); //essta linha habilita o token no header
    next();
  });



app.get('/', (req, res) => {
    return console.log(req.headers)
  })

  app.get('/a', (req, res) => {
    console.log(req.header('User-Agent'));
  })


const server = http.createServer(app); 
server.listen(3333);
console.log("Servidor escutando na porta 3333...");