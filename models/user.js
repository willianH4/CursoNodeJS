import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const { Schema } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [ true, "First name is requirede" ]
    },
    lastName: {
        type: String,
        required: [ true, "Last name is requirede" ]
    },
    email: {
        type: String,
        unique: true,
        required: [ true, "Email is requirede" ]
    },
    password: {
        type: String,
        required: [ true, "Password is requirede" ]
    },

});

// metodos estaticos y pueden hacerce de instancia
userSchema.methods.isPasswordValid = async function(plainText){
    const isValid = await bcrypt.compare(textPassword, this.password)
    return isValid
}

userSchema.statics.findByEmailAndComparePassword = function(email, textPassword) {
    return new Promise((resolve, reject) => {
        this.findOne({ email:email })
        .then((user) => {
            bcrypt.compare(textPassword, user.password).then(isValid => {
            resolve({isValid:isValid, user:user});
        })
        .catch((err) => {
            reject(err);
        })
    })
        .catch((err) => {
        reject(err)
        });
    }); 
};


export const User = mongoose.model( 'User', userSchema );