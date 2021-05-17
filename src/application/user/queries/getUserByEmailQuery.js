const locator = require('servicelocator');

class GetUserByEmailQueryHandler {

    //Get all workspaces handler
    async getUserByEmail(email){
      const userRepository = locator.get('iuserRepository');
      var userInformation = await userRepository.getUserByEmail(email);
      return userInformation;
  
    }
  }
  
  //Exporting get user handler class
  module.exports = GetUserByEmailQueryHandler;