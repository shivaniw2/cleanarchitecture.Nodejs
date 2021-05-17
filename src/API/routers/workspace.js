
const express = require('express');
const router = express.Router();
const locator = require('servicelocator');
const validatorMiddleware = require('./../../application/common/middleware/commandValidation');
const CommandType = require('./../../application/common/constant');


router.use(express.json());

//GET : workspace
router.get('/', async (req, res) => {

    const getAllWorkspaceQuery = locator.get('getAllWorkspaceQuery');
    var workspaces = await getAllWorkspaceQuery.getAllWorkspaces();
    return res.status(200).send(workspaces);

});


//POST: workspace
router.post('/', (req, res, next)=>{validatorMiddleware(req,res,next, CommandType.Create)},async (req, res) => {

    const createCommand = locator.get('createWorkspaceCommand');
    const result = await createCommand.createWorkspace(req.body);
    return res.status(201).send({id: result._id});
});

//PUT: workspace
router.put('/:id',(req, res, next)=>{validatorMiddleware(req,res,next, CommandType.Update)}, async (req, res) => {

    const updateWorkspace = locator.get('updateWorkspaceCommand');
    const result = await updateWorkspace.updateWorkspace(req.params.id, req.body);
    return res.status(201).send('workspace updated');
});

//DELETE: workspace
router.delete('/:id',(req, res, next)=>{validatorMiddleware(req,res,next, CommandType.Delete)}, async (req, res) => {

    const deleteCommand = locator.get('deleteWorkspaceCommand');
    const result = await deleteCommand.deleteWorkspace(req.params.id);
    return res.status(201).send('workspace deleted');
});


module.exports = router;