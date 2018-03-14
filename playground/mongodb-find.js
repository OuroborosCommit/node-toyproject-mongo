const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{

	if(err){
		return console.log('Unable to connect to mongo server');
	}

	console.log('Connected to mongoDB server');
	const db = client.db('TodoApp');

	db.collection('Todos').find().toArray().then((docs)=>{
		console.log('Todos'); 
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('Unable to fetch To-do', err);
	});

	//client.close();
});
