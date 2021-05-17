const locator = require('servicelocator');

class CreateWorkspaceHandler{

      async createWorkspace(createWorkspacePayload){
             //create workspace
            const workspaceRepository = locator.get('iworkspaceRepository');
            var response = await workspaceRepository.createWorkspace(createWorkspacePayload);
            return response;
      }
}


//Exporting create workspace handler class
module.exports = CreateWorkspaceHandler;