
/*
 * Controller Dashboard after login
 */

exports.index = function(req, res){
  
  res.render('dashboard', { title: 'Dashboard' });
  
    GLOBAL_SOCKET.broadcast.emit('online',{'users':USERS});
};
