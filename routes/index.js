module.exports = (app) => {
    app.get('/', (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1>Test Index Page!</h1>');
    });
};