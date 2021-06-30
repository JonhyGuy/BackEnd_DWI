import {Schema, model} from 'mongoose';

const prodcutSchema = new Schema({
	// "sku": String,
	"name": String,
	"price": Number,
	"description": String,
	// "thumbnail": String,
	// "image": String,
	"stock": Number,
	"category": {
		"name": String,
		"description": String
	}

},{
    versionKey: false
});

export default model('Product', prodcutSchema);