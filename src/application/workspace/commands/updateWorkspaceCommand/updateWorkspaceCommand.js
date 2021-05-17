const events = require('events');
const locator = require('servicelocator');

class UpdateWorkspaceHandler{

    async updateWorkspace(id, updateWorkspacePayload){
           //update workspace
          const workspaceRepository = locator.get('iworkspaceRepository');
          var response = await workspaceRepository.updateWorkspace(id, updateWorkspacePayload);
          return response;
    }
}


//Exporting update workspace handler class
module.exports = UpdateWorkspaceHandler;