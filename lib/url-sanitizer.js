"use strict";

module.exports = function(url) {
    return url.replace(/(\/|^)[._]([^\/\.])/g, '$1$2');
}
