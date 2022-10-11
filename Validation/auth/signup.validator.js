const validator = require("validator").default;
const isEmpty = require("../../utills/isEmpty");

module.exports = function validateSignup(data) {
  const errors = {};

  data.username = !isEmpty(data.username)
    ? validator.escape(data.username)
    : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password)
    ? validator.escape(data.password)
    : "";

  // username validation
  if (validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  } else if (!validator.isLength(data.username, { min: 3, max: 30 })) {
    errors.username = "Username must be min 3 and max 30 characters";
  }

  // Email Validation
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }
  // Password validation
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  } else if (!validator.isLength(data.password, { min: 6 })) {
    errors.password = "Pasword must be min 6 charcters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
    data,
  };
};