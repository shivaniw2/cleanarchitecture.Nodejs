const locator = require('servicelocator');
const GetAllWorkspaceHandler = require('./../../application/workspace/queries/getAllWorkspaceQuery');
const CreateWorkspaceHandler = require('./../../application/workspace/commands/createWorkspaceCommand/createWorkspaceCommand');
const DeleteWorkspaceHandler = require('../../application/workspace/commands/deleteWorksapceCommand/deleteWorkspaceCommand');
const UpdateWorkspaceHandler = require('../../application/workspace/commands/updateWorkspaceCommand/updateWorkspaceCommand');


module.exports = function(){
    locator.register('getAllWorkspaceQuery', new GetAllWorkspaceHandler());
    locator.register('createWorkspaceCommand', new CreateWorkspaceHandler());
    locator.register('deleteWorkspaceCommand', new DeleteWorkspaceHandler());
    locator.register('updateWorkspaceCommand', new UpdateWorkspaceHandler());
}
