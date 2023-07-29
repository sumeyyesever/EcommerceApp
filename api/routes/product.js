const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("../verifyToken");
const router = require("express").Router();


//CREATE
router.post("/", verifyTokenAndAdmin, async(req,res)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        console.log(error);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body,}, {new:true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("product has been deleted.");
    } catch (error) {
        console.log(error);
    }
});

//GET PRODUCT
router.get("/find/:id", async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if(qNew){
            products = await Product.find().sort(({createdAt: -1})).limit(1); //sort by createdAt in the descending order
        }else if(qCategory){
            products = await Product.find({categories: {$in: [qCategory],},});
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;
