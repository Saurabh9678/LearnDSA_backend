// We are just doing try and catch block in this module for async function which is a good practice
module.exports = (asyncError) => (req, res, next) => {
    Promise.resolve(asyncError(req, res, next)).catch(next);
  };
  