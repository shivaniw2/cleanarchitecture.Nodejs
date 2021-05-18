const {User} = require('./../model/user');
const iuserRepository = require('./../../../../application/user/interfaces/iuserRepository');
const bcrypt = require('bcrypt');

class UserRepository extends iuserRepository{

    constructor() {
        super();
      }

    //Get user information from db
    async getUserById(id){
        const userInformation = await User.findById(id).select('-password');
        return userInformation;
    }
    async getUserByEmail(email){
        const userInformation = await User.findOne({email: email}).exec();;
        return userInformation;
    }

    //Insert user in db
    async createUser(createUserPayload){
        let user = new User({
            name: createUserPayload.name,
            email: createUserPayload.email,
            password: createUserPayload.password,
        })

        const salt = await bcrypt.genSalt(10); //no of times you wanna run this algo to generate sale, lomger it is complex it is
        user.password = await bcrypt.hash(user.password, salt);

        return await user.save(user);
    }
}

module.exports = UserRepository;