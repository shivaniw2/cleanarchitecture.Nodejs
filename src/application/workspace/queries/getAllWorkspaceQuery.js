const locator = require('servicelocator');
const CustomEventEmitter = require('./../../common/customEventEmitter');


class GetAllWorkspaceHandler {

  //Get all workspaces handler
  async getAllWorkspaces(){
    console.log(`application level get`);
    const workspaceRepository = locator.get('iworkspaceRepository');
    var workspaces = await workspaceRepository.getAllWorkspaces();
    return workspaces;

  }

}

module.exports = GetAllWorkspaceHandler;