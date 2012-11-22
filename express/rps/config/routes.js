/**
 * config routing
 */

var topPage = require('../controller');
var dashboard = require('../controller/dashboard');
var arena = require('../controller/arena');
module.exports = function(app){
      
    app.get('/', topPage.index);                           //top page
    app.get('/dashboard', dashboard.index);                //Dashboard Page
    app.get('/arena', arena.index);                        //arena Page
    
}