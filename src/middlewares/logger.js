const logger = function(req, res, next) {
	const { method, url } = req;
   
	const date = new Date().toLocaleString();
	console.log(`${date}: ${method} ${url}`);
	next();
}
module.exports=logger;