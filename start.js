const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config({ path: 'variables.env' });

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(process.env.TESTDATABASE);
} else if (process.env.NODE_ENV === 'dev') {
  mongoose.connect(process.env.LOCALDATABASE);
} else if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.PRODUCTIONDATABASE);
}

mongoose.connection.on('error', (err) => {
  console.error(chalk.red(`${err.message}`));
});

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(chalk.blue(`Express running → PORT ${server.address().port}`));
});
