const express= require('express');
const router = express.Router();
const locator = require('servicelocator');
const {logger} = require('./../../infrastucture/services/logger/configureLogger');
const userCommandValidatorMiddleware = require('../../application/common/middleware/userCommandValidatorMiddleware');


router.use(express.json());

//get current user details
router.get('/:id', async(req,res)=>{

    try {
        logger.info('Get user started')
        const getUserQuery = locator.get('getUserByIdQuery');
        var userInformation = await getUserQuery.getUserById(req.params.id);
        logger.info('Get user ended')
        return res.status(200).send(userInformation);
    }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }
});

//Create user
router.post('/', userCommandValidatorMiddleware, async (req, res, next) => {

   try {
        logger.info('Post user started')
        const createCommand = locator.get('createUserCommand');
        const result = await createCommand.createUser(req.body);
        logger.info('Post user ended')
        return res.status(201).send({ id: result._id });
   }
    catch (ex) {
        res.status(500).send('Error occurred');
        logger.error('Error occurred',ex);
    }
});

module.exports = router;