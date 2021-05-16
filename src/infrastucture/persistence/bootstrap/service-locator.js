const locator = require('servicelocator');
const WorkspaceRepository = require('./../mongo/implementation/workspaceRepository');

module.exports = function(){
    locator.register('iworkspaceRepository', new WorkspaceRepository());
}
