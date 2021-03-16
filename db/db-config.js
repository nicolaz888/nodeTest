const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            });

        console.log('DB connected');
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    dbConnection
}