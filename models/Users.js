const mongoose = require('mongoose');
const { hash, compare } = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "You must enter a username"],
        minlength: [5, "Your username must be at least 5 characters long"]
    },

    email: {
        type: String,
        unique: true,
        required: [true, "You must enter a valid email"],
        validate: {
            validator(val) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig.test(val);
            },
            message: "Your email address is not formatted correctly"
        }
    },

    password: {
        type: String,
        required: [true, "You must enter a password"],
        minlength: [7, "Your password must be at least 7 characters long"]
    },

    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
      createdAt: {
        type: Date,
        default: Date.now
      }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified("password")) {
        this.password = await hash(this.password, 10);
    }

    next();
});

userSchema.methods.validatePass = async function (formPassword) {
    const is_valid = await compare(formPassword, this.password);
    return is_valid;
}

userSchema.set('toJSON', {
    transform: (_, user) => {
        delete user.password;
        delete user.__v;
        return user;
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
