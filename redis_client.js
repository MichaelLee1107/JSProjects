var redis = require("redis");
var client = redis.createClient(6379,'10.10.11.227');
client.auth('!JbMuXDZ2g@$Jyox');
client.select(2,(err)=>{
	if(!err){
		var key = 'emodels:mytest'
		var val = '{"name":123}'
		client.set(key,val,(error)=>{

		});
	}
});


console.log(new Date('1970-01-01T00:00:00Z').getTime());