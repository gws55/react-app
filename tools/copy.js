const cpy = require('cpy');

module.exports = () => {
    cpy(['public/*.*'], 'build');
}
