import { Product } from "../models/product.model.js";
import { AsyncHandle } from "../utils/AsyncHandle.js";
import { ImageUpload } from "../utils/cloudinary.js";
/**
 * Creates a new product entry in the database.
 * 
 * @param {Object} req - The request object containing the product details in the body.
 * @param {Object} res - The response object to send back the result.
 */
const createProductEntry = AsyncHandle(async(req,res)=>{
    const {productId, productName, productDescription, amount}=req.body
    const existingProductID = await Product.findOne({productId});
        
        console.log(req.files);
        
   const productImageLocal = req.files?.productImage[0]?.path;
   console.log(productImageLocal)
   if (!productImageLocal) throw new Error ("no image");
    const productImage =await ImageUpload(productImageLocal)
    if(!productImage){
        throw new Error("Image is required")
    }
    if(existingProductID){
        res.status(409)
        throw new Error("ProductID already exists")
    }
    
    const productEntry = await Product.create({
        productImage: productImage.url,
        productId,
        productName,
        productDescription,
        amount
    })
    
    const newProductEntry  = await Product.findById(productEntry._id);
    
    if(!newProductEntry){
        res.status(500)
        throw new Error("Internal error occurred while adding new product")
    }
    
    console.log(newProductEntry)
    
    res
    .status(200)
    .json("New Product added successfully")
})

/**
 * Retrieves the top 5 products based on their sales amount and sends them as a JSON response.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const topSales = AsyncHandle(async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({ data: allProducts });
    } catch (error) {
        console.log(error);
    }
});
const totalRevenue = AsyncHandle(async (req, res) => {
    try {
        const products = await Product.find();
        
        let totalAmount = 0;
        products.forEach(product => {
            totalAmount += product.amount;
        });

        console.log("Total Revenue:", totalAmount);
        res.status(200).json({ totalRevenue: totalAmount });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


export 
{
    createProductEntry,
    topSales,
    totalRevenue
}