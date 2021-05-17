const events = require('events');
const locator = require('servicelocator');

class DeleteWorkspaceHandler{

    async deleteWorkspace(id){
           //delete workspace
          const workspaceRepository = locator.get('iworkspaceRepository');
          var response = await workspaceRepository.deleteWorkspace(id);
          return response;
    }
}


//Exporting delete workspace handler class
module.exports = DeleteWorkspaceHandler;