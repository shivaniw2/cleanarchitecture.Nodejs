const locator = require('servicelocator');
const WorkspaceRepository = require('./../mongo/implementation/workspaceRepository');
const UserRepository = require('./../mongo/implementation/userRepository');

module.exports = function(){
    locator.register('iworkspaceRepository', new WorkspaceRepository());
    locator.register('iuserRepository', new UserRepository());
}
