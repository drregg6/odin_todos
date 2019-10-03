const moment = require('moment');

module.exports = function(str) {
  return moment(str, 'MM/DD/YYYY', true).isValid();
}