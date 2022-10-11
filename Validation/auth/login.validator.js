const validator = require('validator').default;
const isEmpty = require('../../utills/isEmpty');

module.exports = function validateLogin(data) {
    const errors = {};

    data.email = !isEmpty(data.email) ? validator.escape(data.email) : '';
    data.password = !isEmpty(data.password) ? validator.escape(data.password) : '';

    // if needed username validation
    // if (!validator.isLength(data.username, { min: 3, max: 30 })) {
    //     errors.username = 'Username must be between 3 and 30 characters';
    // } else if (validator.isEmpty(data.username)) {
    //     errors.username = 'Username is required';
    // }

    // Email Validation
    if (validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is not valid";
    }

    // password validation
    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    } else if (validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
        data,
    };
};