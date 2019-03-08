var ejs = require('ejs');
var templateString = null;
var fs = require('fs');

var templateString = fs.readFileSync('./api/documents/demo.ejs', 'utf-8');
module.exports = ({ Student_data }) => {
return ejs.render(templateString,{ Student_data:Student_data });
};
