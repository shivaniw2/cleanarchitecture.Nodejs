
const express = require('express');
const router = express.Router();
const locator = require('servicelocator');
const validatorMiddleware = require('../../application/common/middleware/workspaceCommandValidatorMiddleware');
const CommandType = require('../../application/common/constant');
const {logger} = require('../../infrastucture/services/logger/configureLogger');
const authMiddleware = require('../../application/common/middleware/authMiddleware');


router.use(express.json());

//GET : workspace
router.get('/',authMiddleware, async (req, res,next) => {

    try {
        logger.info('Get workspace started')
        const getAllWorkspaceQuery = locator.get('getAllWorkspaceQuery');
        var workspaces = await getAllWorkspaceQuery.getAllWorkspaces();
        logger.info('Get workspace ended')
        return res.status(200).send(workspaces);
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }

});


//POST: workspace
router.post('/', [authMiddleware, (req, res, next) => { validatorMiddleware(req, res, next, CommandType.Create) }], async (req, res) => {
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
router.put('/:id', [authMiddleware,(req, res, next) => { validatorMiddleware(req, res, next, CommandType.Update) }], async (req, res) => {

    try {
        logger.info('Put workspace ended')
        const updateWorkspace = locator.get('updateWorkspaceCommand');
        const result = await updateWorkspace.updateWorkspace(req.params.id, req.body);
        logger.info('Put workspace ended')
        return res.status(200).send('workspace updated');
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }
});

//DELETE: workspace
router.delete('/:id', [authMiddleware,(req, res, next) => { validatorMiddleware(req, res, next, CommandType.Delete) }], async (req, res) => {

    try {
        logger.info('Delete workspace ended')
        const deleteCommand = locator.get('deleteWorkspaceCommand');
        const result = await deleteCommand.deleteWorkspace(req.params.id);
        logger.info('Delete workspace ended')
        return res.status(200).send('workspace deleted');
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }
});


module.exports = router;