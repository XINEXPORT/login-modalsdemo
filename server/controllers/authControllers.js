import {User} from '../../database/model.js'

//WHEN A USER LOGINS, FIND THE USER W/ EMAIL
const login = async(req,res)=>{
    const {email, password} = req.body
    const user = await User.findOne ({where: {email:email}})

    if(user && user.password ===password){
        req.session.user = user
        let userCopy = {...user.toJSON()}
        delete userCopy.password
        res.json({success:true, user:userCopy})
        return
    } else{
        res.json({success:false})
    }
}

//LOGOUT
const logout = async (req,res)=>{
    req.session.destroy()
        res.json({success: true})
        return
    }

//SERVER TELLS THE FRONT END THAT THEIR LOGGED IN
const checkStatus = async(req,res)=>{
    if(req.session.user){
        let user = {...req.session.user}
        delete user.password
        res.status(200).json({user: user, loggedIn: true})
        return
} else{
    res.status(200).json({user:null, loggedIn: false})
    return
}}

const register = async(req,res)=>{
    const {email, password} = req.body
    if(email && password){
        let user=  await User.findOne({where: {email:email}})
        if (user){
            res.status(401).json({error: 'user exists'})
            return
        }else{
            user= await User.create({email,password})
            req.session.user = user.toJSON()
            let userCopy = {...user.toJSON()}
            delete userCopy.password
            res.status(200).json({success: true, user: userCopy})
            return
        }
    }else{
        res.status(401).json({error: 'information is missing'})
        return
    }
}

export {login,logout, checkStatus, register}