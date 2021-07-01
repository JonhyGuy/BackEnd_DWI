import Customer from '../models/customer';
import customerSeller from '../models/customerSeller';
import jwt from 'jsonwebtoken';
import config from '../config'

export const getCustomer = async (req, res) => {
    const customer = await Customer.find();
    res.json(customer);
}

export const getCustomerById = async(req, res) => {
      const customer = await Customer.findById(req.params.id);
      res.status(200).json(customer);
}

export const createCustomer = async (req, res) => {
    try {
        const {
            full_name,
            email,
            password,
            billing_address,
            shipping_address,
            country,
            phone,
            customer_type,
            customer_seller
        } = req.body;
    
        let customerId;
        if(customer_seller){
            const newCustomerSeller = new customerSeller(customer_seller);
            const customerSellerSaved = await newCustomerSeller.save();
            console.log(customerSellerSaved);
            customerId = customerSellerSaved._id;
        } else{
            customerId = null;
        }

        
        const newCustomer = new Customer({
            full_name,
            email,
            password: await Customer.encryptPassword(password),
            billing_address,
            shipping_address,
            country,
            phone,
            customer_type,
            customer_seller : customerId
        });

    
        const customerSaved = await newCustomer.save();
    
        const token = jwt.sign({
            id: customerSaved._id
        }, config.SECRET, {
            expiresIn: 86400 // 24 hours
        })
    
        res.status(200).json({token, customerSaved
        });
        
    } catch (error) {
        return res.status(404).json({message: "El correo ya fue registrado"});
    }
    
}

export const updateCustomerById = async (req, res) => {
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updateCustomer);
}

export const deleteCustomerById = async(req, res) => {

    try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCustomer); 
    } catch (error) {
        return res.status(401).json({message: "Id don't exist"});
    }
    
}