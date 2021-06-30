import {Schema, model} from 'mongoose';

const customerSellerSchema = new Schema({
	"wallet": Number,
    products: [{
        ref: "Product",
        type: Schema.Types.ObjectId
    }]
	
},{
    versionKey: false
});

export default model('CustomerSeller', customerSellerSchema);