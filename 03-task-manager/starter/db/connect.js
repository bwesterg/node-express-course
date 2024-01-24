const mongoose = require('mongoose')

const connectionString = 
    'mongodb+srv://bentonwestergaard:ldNfPsRsad8iubEq@cluster0.na36vha.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('CONnected to the db...'))
    .catch((err) => console.log(err))


    // mongodb+srv://bentonwestergaard:ldNfPsRsad8iubEq@cluster0.na36vha.mongodb.net/?retryWrites=true&w=majority
