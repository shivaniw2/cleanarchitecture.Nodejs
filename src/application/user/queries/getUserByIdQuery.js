const locator = require('servicelocator');

class GetUserByIdQueryHandler {

    //Get all workspaces handler
    async getUserById(id){
      const userRepository = locator.get('iuserRepository');
      var userInformation = await userRepository.getUserById(id);
      return userInformation;
  
    }
  
  }
  
  //Exporting get user handler class
  module.exports = GetUserByIdQueryHandler;