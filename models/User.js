const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter valid email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter valid password'],
        minLength: [6, 'Minimum length is 6 characters']
    },
});

userSchema.post('save', function(doc, next){
    console.log('new user was created and saved', doc);
    next();
});

userSchema.pre('save', function(next){
    console.log('user about to be created and saved', this);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;