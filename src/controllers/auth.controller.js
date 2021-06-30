import Customer from '../models/customer';
import jwt from 'jsonwebtoken';
import config from '../config';

export const singIn = async (req , res) =>{
    
    const user = await Customer.findOne({email: req.body.email});

    if(!user) return res.status(400).json({message: "Customer not found"});

    const matchPassword = await Customer.comparePassword(req.body.password, user.password )

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})
    
    const token = jwt.sign({id: user._id}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token}); 
}