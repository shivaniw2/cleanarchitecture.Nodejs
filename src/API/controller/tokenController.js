const express = require('express');
const router = express.Router();
const {logger} = require('../../infrastucture/services/logger/configureLogger');
const config = require('config');
const bcrypt = require('bcrypt');
const locator = require('servicelocator');

router.use(express.json());

router.post('/', async (req, res) => {

    try{
        logger.info('Get token started')
        const getUserQuery = locator.get('getUserByEmailQuery');
        var userInformation = await getUserQuery.getUserByEmail(req.body.email);
        if(!userInformation || !userInformation.id) return res.status(400).send('Invalid email or password');
        
        const isValidaPassword = await bcrypt.compare(req.body.password, userInformation.password);
        if(!isValidaPassword) return res.status(400).send('Invalid password');

        const token = userInformation.generateToken();
        logger.info('Get token ended')
        return res.status(200).send(token);
    }
    catch(err)
    {
        res.status(500).send('Error occurred');
        console.log('Error occurred', err);
    }
});

module.exports = router;