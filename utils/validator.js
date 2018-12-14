module.exports = {
    user: (app, request, response) => {
        request.assert('_name', 'O nome é obrigatório').notEmpty();
        request.assert('_email', 'O email é obrigatório').notEmpty().isEmail();

        let errors = request.validationErrors();

        if (errors) {
            app.utils.error.send(errors, request, response);
            return false;
        } else {
            return true;
        }
    }
};