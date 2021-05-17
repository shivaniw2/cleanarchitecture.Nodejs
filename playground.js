// const { AbstractAggregate, AbstractProjection } = require('node-cqrs');
// const { ContainerBuilder, InMemoryEventStorage } = require('node-cqrs');

// class UsersProjection extends AbstractProjection {

// 	static get handles() {
// 		return [
// 			'userCreated'
// 		];
// 	}

// 	async userCreated(event) {
// 		const { aggregateId, payload } = event;

// 		// await this.view.create(aggregateId, {
// 		// 	username: payload.username
//         // });
        
//         console.log(`UserCreated : ${payload}`);
// 	}
// }


// class UserAggregate extends AbstractAggregate {
//         static get handles() {
//         return ['createUser'];
//         };
    
//     createUser(commandPayload) {
//         console.log('hey');
//         const { username, password } = commandPayload;
//         console.log(username+' and '+password);


//         this.emit('userCreated', {
//         username,
//         passwordHash: 'shivani'
//         });
//     }
// }

// const builder = new ContainerBuilder();
// builder.register(InMemoryEventStorage).as('storage');
// builder.registerAggregate(UserAggregate);
// builder.registerProjection(UsersProjection, 'users');

// const container = builder.container();

// const userAggregateId = 'id';
// const payload = {
//   username: 'john',
//   password: 'test'
// };

// container.commandBus.send('createUser', userAggregateId, { payload });






// //workspace
// // const Workspace = require('./src/domain/entity/workspace');

// // const a = new Workspace('id',new Date().toUTCString(), new Date().toUTCString(), 'workspaceName', 'location', ['a','b'], 'abc', 'active');
// // console.log(a);

//valid mongo id with joi

// const Joi = require('Joi');
// Joi.objectId = require('joi-objectid')(Joi)

// const schema = Joi.object({
//     id: Joi.objectId()
//   })


//   const result = schema.validate({id:'60a0e1830c2fdbdab09bced2'});
//  console.log(result);
