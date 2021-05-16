
const BaseEntity = require('./../common/baseEntity');

class Workspace extends BaseEntity{

    constructor(id, createdOn, modifiedOn, workspaceName, location, attributes, workspaceType, status){
        super(id, createdOn, modifiedOn),
        this.workspaceName = workspaceName;
        this.location = location;
        this.attributes = attributes;
        this.workspaceType = workspaceType;
        this.status = status;
    }
}

module.exports = Workspace;