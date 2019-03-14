


const fun1 =()=>{
	return new Promise((resolve, rejects)=>{
		setTimeout(()=>{
			resolve(true);
		}, 3000);
	});
};

const fun2 =()=>{
	return new Promise((resolve, rejects)=>{
		setTimeout(()=>{
			resolve(false);
		}, 3000);
	});
};

const test =async ()=>{
	let ret = await fun1().then(res){
		return res;
	}.catch()={
		return res;
	};
	// if(ret){
	// 	console.log('TRUE')
	// 	return;
	// }else{
	// 	console.log('FALSE')
	// }
	ret = await fun2();
	// if(ret){
	// 	console.log('TRUE')
	// 	return;
	// }else{
	// 	console.log('FALSE')
	}
	console.log('helo');
}
test();