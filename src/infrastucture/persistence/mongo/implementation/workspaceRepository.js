
const {WorkspaceDto, workspaceSchema} = require('./../model/workspace');
const iWorkspaceRepository = require('./../../../../application/workspace/interfaces/iWorkspaceRepository');

class WorkspaceRepository extends iWorkspaceRepository{

    constructor() {
        super();
      }

    //Get all workspace from db
    async getAllWorkspaces(){
        const allWorkspaces =  await WorkspaceDto.find();
        return allWorkspaces;
    }

    //Insert workspace in db
    async createWorkspace(createPayload){
        let workspace = new WorkspaceDto({
            workspaceName : createPayload.workspaceName,
            location : createPayload.location,
            attributes : createPayload.attributes,
            workspaceType : createPayload.workspaceType,
            status : createPayload.status
        })
        return await workspace.save(workspace);
    }

    //Update workspace in db : query first approach
    async updateWorkspace(id, updatePayload){

        var searchedWorkspace = await WorkspaceDto.findById(id);
        searchedWorkspace.workspaceName = updatePayload.workspaceName;
        searchedWorkspace.location = updatePayload.location;
        searchedWorkspace.attributes = updatePayload.attributes;
        searchedWorkspace.workspaceType = updatePayload.workspaceType;
        searchedWorkspace.status = updatePayload.status;

        var result = await searchedWorkspace.save();
        return result;
    }
    

    //Delete workspace
    async deleteWorkspace(id) {

        var result = await WorkspaceDto.findByIdAndRemove(id);
        return result;
    }
}

module.exports = WorkspaceRepository;