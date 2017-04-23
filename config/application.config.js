module.exports = function() {
	switch(process.env.NODE_ENV){
		case 'production':
			return {
				environment: 'production'
			};
			break;
		default:
			console.warn('NODE_ENV not set. Defaulting to "development"');
		case 'development':
			return {
				environment: 'development'
			};
			break;
	}
}