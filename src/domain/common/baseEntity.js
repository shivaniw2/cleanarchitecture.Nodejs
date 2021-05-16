
class BaseEntity{
    
    constructor(id, createdOn, modifiedOn){
        this.id = id;
        this.createdOn = createdOn;
        this.modifiedOn = modifiedOn;
    }

}

module.exports = BaseEntity;