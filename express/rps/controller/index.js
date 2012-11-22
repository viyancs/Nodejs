
/*
 * GET home page.
 */

exports.index = function(req, res){
  
  res.render('index', { title: 'Express' });
  
  
  /*
   * background Process
   */
  GLOBAL_SOCKET.emit('msg',{ info:'Mission Success'});
};