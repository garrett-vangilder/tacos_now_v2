const mongoose = require('mongoose');

before((done) => {
  mongoose.connect(process.env.TESTDATABASE);
  mongoose.connection
    .once('open', () => done())
    .on('error', (err) => {
      console.log(err);
    });
});
