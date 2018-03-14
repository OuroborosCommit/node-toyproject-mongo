const {MongoClient,ObjectID} = require('mongodb') ; 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {

	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to Mongo server');
	const db = client.db('TodoApp');

	// // Delete One
	// db.collection('Todos').deleteOne({text:'Eat lunch'}).then(result => {
	// 	console.log(result); });

	// 		// Delete Many
	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then(result => {
	// 	console.log(result); });

	//FindOneandDelete

	db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>
	{
		console.log(result);
	});

	
});