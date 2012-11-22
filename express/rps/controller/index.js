
/*
 * Controller Top Page
 */

exports.index = function(req, res){
  
  res.render('index', { title: 'Login Page' });
  
};