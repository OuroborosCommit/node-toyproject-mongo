const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{

	if(err){
		return console.log('Unable to connect to mongo server');
	}

	console.log('Connected to mongoDB server');
	const db = client.db('TodoApp');
	db.collection('Users').insertOne({
		username:'Danick',
		email:'ImissedBJJ@quitter.com',
		password:'IneedTurbuluentJuice'
	}, (err,result) =>{
		if(err){
			return console.log('Unable to insert todo',err);
		}

		console.log(JSON.stringify(result.ops,undefined,2));
		}
	  )


	client.close();
});
