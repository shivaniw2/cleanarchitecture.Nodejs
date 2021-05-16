
const express = require('express');
const router = express.Router();
//const getAllWorkspaceQueryEmitter = require('./../../application/workspace/queries/getAllWorkspaceQuery');
const createWorkspaceCommandEmitter = require('./../../application/workspace/commands/createWorkspaceCommand');
const locator = require('servicelocator');


router.use(express.json());

//GET : workspace
router.get('/', async (req, res) => {

    const getAllWorkspaceQuery = locator.get('getAllWorkspaceQuery');
    var workspaces = await getAllWorkspaceQuery.getAllWorkspaces();
    return res.status(200).send(workspaces);

});


//POST: workspace
router.post('/', async (req, res) => {

    const createCommand = locator.get('creteWorkspaceCommand');
    const result = await createCommand.createWorkspace(req.body);
    return res.status(201).send({id: result._id});
});

//PUT: workspace
router.put('/:id', async (req, res) => {

    const updateWorkspace = locator.get('updateWorkspaceCommand');
    const result = await updateWorkspace.updateWorkspace(req.params.id, req.body);
    return res.status(201).send('workspace updated');
});

//DELETE: workspace
router.delete('/:id', async (req, res) => {

    const deleteCommand = locator.get('deleteWorkspaceCommand');
    const result = await deleteCommand.deleteWorkspace(req.params.id);
    return res.status(201).send('workspace deleted');
});


module.exports = router;