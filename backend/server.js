const app = require('./app');

const server = app.listen(5000, () => {
    console.log(`Backend Server is runnimg on PORT ${server.address().port}`);
})