import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const customerSchema = new Schema({
    "full_name": String,
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    "billing_address": String,
    "shipping_address": String,
    "country": String,
    "phone": Number,
    "customer_type": String,
    customer_seller: {
        ref: "CustomerSeller",
        type: Schema.Types.ObjectId
    }
},{
    versionKey: false
});

customerSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

customerSchema.statics.comparePassword = async( password, recivedPassoword)=> {
   return await bcrypt.compare(password, recivedPassoword);
}

export default model('Customer', customerSchema); 