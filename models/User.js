const mongoose =require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    name: {type: String , require: true},
    emailAddress: {type: String , require: true},
    password : {type: String , require: true},
    comics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comic' // the Comic model
    }],
},
{
    timestamps : true
})
    
UserSchema.methods.verifyPassword = function(password){
    console.log('Verifying:', password)
    console.log(this.password)
    return bcrypt.compareSync(password, this.password)
}
    
const User = mongoose.model('User',UserSchema)

module.exports = User;