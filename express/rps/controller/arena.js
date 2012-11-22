
/*
 * Controller Arena after login
 */

exports.index = function(req, res){
  
  res.render('arena', { title: 'Arena' },function(err,html){
	GLOBAL_SOCKET.emit('msg',{info:'mission Successs'});
  });
  
    
};
