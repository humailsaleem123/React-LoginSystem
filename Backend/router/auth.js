const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connect');
const User = require('../Models/userSchema');

router.get('/',(req,res)=> {
    res.send(`Hello World!!!`);
});

router.post('/register' , async (req , res) => {
    console.log(req.body);
    // res.json({message: req.body});
    const {fullname , username , password , confirmPassword} = req.body;

    if(!fullname || !username || !password || !confirmPassword){
        return res.status(422).json({error:"Please filled the field correctly"});
    }

    try
    {

        const userExist = await User.findOne({username:username});
        if(userExist){
            res.send({message:"Username Already Exist !!!", severity:"error"});
            return res.status(422).json({error:"Username already Exist"});
        }

        const user = new User({ fullname, username , password , confirmPassword});
        await user.save();
        res.status(201).json({message:"User Registered Successfully!!",severity:"success"})
    }

    catch(err){
        console.log("showing errors" , err);

    }
    })



    
    router.post('/login' , async (req, res)=> {

        console.log(req.body);
        const {username , password} = req.body;

        if(!username || !password ){
            return res.status(422).json({error:"Please filled the field correctly"});
        }
        else{
            console.log("abccc");
        }
    
        try{
            console.log("username",username);
            console.log("password",password);
            const LoginUser = await User.findOne({ username:username });


            if(LoginUser === null)
            {
                res.send({
                    message:"Invalid Credientials !!!",
                     severity:"error"
                });
                return res.status(422).json({error:"Invalid Credientials !!!"});
            }

            console.log("checkUser",LoginUser);
            console.log("checkPassword",LoginUser.password);
            const isMatch = await bcrypt.compare(password, LoginUser.password);
            
            console.log("checkUser cond",(LoginUser && isMatch));
           
            if(LoginUser && isMatch){
                res.status(201).json({
                    message:"Login Successfull !!!",
                    severity:"success",
                    userName:username
                })
            }
            else{
                res.send({
                    message:"Invalid Credientials !!!",
                     severity:"error"
                });
                return res.status(422).json({error:"Invalid Credientials !!!"});
            }
        }
        catch(err){
            console.log('errors', err);
        }

    })




    
    // res.send(`register route`);

module.exports = router;