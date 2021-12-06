"use strict";
const errorHandler = (error, res) => {
    return res.code(404);
};
module.exports = errorHandler;
