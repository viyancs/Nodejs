
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET Login Page.
 */

exports.login = function(req,res){
   var data = {
      title: 'Login Page',
      information: 'Please Login for Access Your Account'
   }
   res.render('login',data);
}
