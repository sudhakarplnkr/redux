import app from './app';

const server = app.listen(process.env.PORT, () => {
    console.log(`Express server listening on port: ${process.env.PORT}`);
    console.log(`Mongo Connection is ${process.env.MONGO_DB_CONNECTION}`);
});

module.exports = server;
