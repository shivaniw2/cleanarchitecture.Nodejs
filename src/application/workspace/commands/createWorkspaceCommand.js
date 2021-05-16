const events = require('events');
const locator = require('servicelocator');

class CreateWorkspaceHandler{

      async createWorkspace(createWorkspacePayload){
             //create workspace
            const workspaceRepository = locator.get('iworkspaceRepository');
            var response = await workspaceRepository.createWorkspace(createWorkspacePayload);
            console.log(`application level create`);
            return response;
      }
}


//Exporting create workspace event emitter
module.exports = CreateWorkspaceHandler;