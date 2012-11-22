
/*
 * Controller Dashboard after login
 */

exports.index = function(req, res){
  
  res.render('dashboard', { title: 'Dashboard' });
  
  //background process
  GLOBAL_SOCKET.broadcast.emit('online',USERS);
};