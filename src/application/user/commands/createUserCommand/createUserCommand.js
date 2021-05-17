const locator = require('servicelocator');

class CreateUserCommandHandler{

      async createUser(createUserPayload){
             //create user
            const userRepository = locator.get('iuserRepository');
            var response = await userRepository.createUser(createUserPayload);
            return response;
      }
}


//Exporting create workspace handler class
module.exports = CreateUserCommandHandler;