const express = require('express');
const morgan = require('morgan');

const app = express();

// Define a new token 'date' that gets the current date and time
morgan.token('date', function () {
  return new Date().toISOString();
});

// Use the 'date' token in your format string
app.use(morgan(':date[iso] :method :url :status :response-time ms - :res[content-length]'));


app.get('/', (req, res) => {
  res.send('Hello World form Lakshan!');
}
);

app.listen(3000, () => {
  console.log('Your app is listening on port 3000');
}
);





