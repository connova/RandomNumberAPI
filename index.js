const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  });

  app.listen(PORT, () => {

    console.log(
        `Express server started on PORT ${app.get('port')}
        | Environment : ${app.get('env')}`
    );
  });

  var number;

  async function random() {

    number = Math.floor(
        Math.random() * (10000000)
    );

  }

 app.get('/', (req, res) => {

    random();
    res.send(`Your Random Number: ${number}`)

 });


 app.get("*", (req, res) => {
  
    // Here user can also design an
    // error page and render it 
    res.send("PAGE NOT FOUND");
  });