const clean = require('./clean');
const copy = require('./copy');
const bundle = require('./bundle');

// clean /build
clean();

// copy static files from /public to /build
copy();

// bundle React app into bundle.js and output to /build
bundle();
