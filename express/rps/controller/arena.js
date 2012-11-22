
/*
 * Controller Arena after login
 */

exports.index = function(req, res){
  
  res.render('arena', { title: 'Arena' });
  
    
  //background process
  GLOBAL_SOCKET.emit('msg',{ info:'Mission Success'});
};