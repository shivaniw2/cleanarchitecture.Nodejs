const locator = require('servicelocator');


class GetAllWorkspaceHandler {

  //Get all workspaces handler
  async getAllWorkspaces(){
    const workspaceRepository = locator.get('iworkspaceRepository');
    var workspaces = await workspaceRepository.getAllWorkspaces();
    return workspaces;

  }

}

//Exporting get workspace handler class
module.exports = GetAllWorkspaceHandler;