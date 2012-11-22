/**
 * config routing
 */

var controller = require('../controller')
module.exports = function(app){
    
    //index page
    app.get('/', controller.index);
    
}