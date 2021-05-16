const mongoose = require('mongoose');
const config = require('config');


module.exports = function(){
    //db connect
    const dbString = 'mongodb://localhost/WorkspaceDB';//config.get('db');
    mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=> console.log(`Connected to mongo db ${dbString}`))
        .catch(err=> console.log('Could not connect to db', err));
}

