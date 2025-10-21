const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Conexão com Banco de Dados Mongoose com Sucesso"))
        .catch((err) => console.log(err));
};

module.exports = connectToDb;
