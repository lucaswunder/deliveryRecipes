const Joi = require('@hapi/joi');

const wrapperError = (error) => {
    return error.map(({
        message,
        path
    }) => ({
        message: message,
        path: path.join('.')
    }));
};

const validate = (req, schema) => Joi.validate(req, schema, {
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
});

module.exports = (schema) => {
    return (req,res, next) => {
        try {
            const { error } = validate(req, schema);

            if(error) {
              const err = new Error();
              err.name = 'Validation';
              err.message = wrapperError(error.details);
              throw err;
            }
            next();
        } catch (err) {
            next(err);
        }
    };
};
