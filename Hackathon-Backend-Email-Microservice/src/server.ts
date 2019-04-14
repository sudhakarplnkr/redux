import app from './app';

const server = app.listen(process.env.PORT, () => {
    console.log(`Express server listening on port: ${process.env.PORT}`);
});

module.exports = server;
