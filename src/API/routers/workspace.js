
const express = require('express');
const router = express.Router();
const locator = require('servicelocator');
const validatorMiddleware = require('./../../application/common/middleware/commandValidation');
const CommandType = require('./../../application/common/constant');
const {logger} = require('./../bootstrap/logger');


router.use(express.json());

//GET : workspace
router.get('/', async (req, res) => {

    try {
        logger.info('Get workspace started')
        const getAllWorkspaceQuery = locator.get('getAllWorkspaceQuery');
        var workspaces = await getAllWorkspaceQuery.getAllWorkspaces();
        logger.info('Get workspace started')
        return res.status(200).send(workspaces);
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }

});


//POST: workspace
router.post('/', (req, res, next) => { validatorMiddleware(req, res, next, CommandType.Create) }, async (req, res) => {
    try {
        logger.info('Post workspace started')
        const createCommand = locator.get('createWorkspaceCommand');
        const result = await createCommand.createWorkspace(req.body);
        logger.info('Post workspace ended')
        return res.status(201).send({ id: result._id });
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }


});

//PUT: workspace
router.put('/:id', (req, res, next) => { validatorMiddleware(req, res, next, CommandType.Update) }, async (req, res) => {

    try {
        logger.info('Put workspace ended')
        const updateWorkspace = locator.get('updateWorkspaceCommand');
        const result = await updateWorkspace.updateWorkspace(req.params.id, req.body);
        logger.info('Put workspace ended')
        return res.status(201).send('workspace updated');
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }
});

//DELETE: workspace
router.delete('/:id', (req, res, next) => { validatorMiddleware(req, res, next, CommandType.Delete) }, async (req, res) => {

    try {
        logger.info('Delete workspace ended')
        const deleteCommand = locator.get('deleteWorkspaceCommand');
        const result = await deleteCommand.deleteWorkspace(req.params.id);
        logger.info('Delete workspace ended')
        return res.status(201).send('workspace deleted');
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }
});


module.exports = router;