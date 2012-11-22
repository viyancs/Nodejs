
/*
 * Controller Dashboard after login
 */

exports.index = function(req, res){
  
  res.render('dashboard', { title: 'Dashboard' },function(err,html){
	GLOBAL_SOCKET.broadcast.emit('online',{'users':USERS});
  });
  
};
