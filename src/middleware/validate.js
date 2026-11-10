const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                errors: errors.array().map(e=>e.msg)
            });
        }
    } catch (error) {
        next();
    }
};

module.exports = validate;

