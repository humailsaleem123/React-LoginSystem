const mongo = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongo.Schema({

    fullname:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
});


userSchema.pre('save', async function(next){

    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword , 12);
    }
    next();
})



const User = mongo.model('User' , userSchema);

module.exports = User;