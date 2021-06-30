import Product from '../models/product';

export const getProduct = async(req, res) => {
 const products = await Product.find();   
 res.json(products);
}

export const getProductById = async(req, res) => {
     const product = await Product.findById(req.params.id);
     res.status(200).json(product);
}

export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

   const productSaved =  await newProduct.save();

    res.status(201).json(productSaved);
}
export const updateProductById = async(req, res) => {
    const updateProduct= await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updateProduct);
}
export const deleteProductById = async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
}
