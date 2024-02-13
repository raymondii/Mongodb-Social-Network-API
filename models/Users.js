// Import 'model' and 'Schema' from mongoose
const { model, Schema, default: mongoose } = require('mongoose');
// Import 'hash' and 'compare' from bcrypt
const { hash, compare } = require('bcrypt');
// Create the userSchema with the following criteria

const userSchema = new Schema({
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


// checks if password is new or if they are mdoifingy their old password and if it is it hashes it
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified("password")) {
        this.password = await hash(this.password, 10);
    }

    next(); // if you do not call next it will not save
});

userSchema.methods.validatePass = async function (formPassword) {
    const is_valid = await compare(formPassword, this.password);

    return is_valid;
}

// deletes the password and the version info before it is sent
userSchema.set('toJSON', {
    transform: (_, user) => {
        delete user.password;
        delete user.__v;
        return user;
    },
});

const User = model('User', userSchema);

module.exports = User;