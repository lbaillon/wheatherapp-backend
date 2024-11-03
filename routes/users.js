var express = require('express');
var router = express.Router();

const User = require('../../models/users');
const {checkBody} = require('../../modules/checkBody')

router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email}).then(dbData => {
        const keys = ["name", "email", "password"]
        if (dbData){
            res.json({result: false, error: 'User already exists'})
        }else if (!checkBody(req.body, keys)){
            res.json({ result: false, error: 'Missing or empty fields'})
        }else{
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            newUser.save().then(newDoc => {
                res.json({result: true, user: newDoc})
            })
        }
    })
})

router.post('/signin', (req, res) => {
    User.findOne({email: req.body.email, password:req.body.password}).then(dbData => {
        let keys = ["email", "password"]
        if (!checkBody(req.body, keys) ){
            res.json({ result: false, error: 'Missing or empty fields'})
        }else if (!dbData){
            res.json({result: false, error: 'User not found'})
        }else{
            res.json({result: true, user: dbData})
        }
    })
})

module.exports = router;