const basicInfo = require('./basicInfo');
const components = require('./components');
const comments = require("./comments")
module.exports = {
    ...basicInfo,
    ...components,
    ...comments
};