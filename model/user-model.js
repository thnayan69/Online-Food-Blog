var db = require('./db');

module.exports={
	get: function(userId, callback){
		var sql = "select * from users where U_ID = ?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where U_ID = ? and U_PASSWORD = ?";

		db.getResult(sql, [user.userId, user.password], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into users values (?, ?, ?, ?)";
		db.execute(sql, [user.userId, user.password, user.type, user.status], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update users set U_ID = ?, U_PASSWORD = ?, U_TYPE = ? where U_ID = ?";
		db.execute(sql, [user.userId, user.password,user.type, user.uname], function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from users where U_ID = ?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},
	activateAccount: function(userId, callback){
		var sql = "update users set U_STATUS = 'VALID' where U_ID = ?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},
	deactivateAccount: function(userId, callback){
		var sql = "update users set U_STATUS = 'INVALID' where U_ID = ?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	}
}



