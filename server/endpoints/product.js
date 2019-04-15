var Product = require('../models/product.model');

function getSingleProduct(req, res) {
    Product.findOne({
        id: req.params.id
    }).exec(function(err, product){
        if (err){
            console.log(err);
            res.status(404);
        }
        else {
            console.log(product);
            res.json(product);
        }
    });
    /*
    const id = req.params.id;
    console.log(id);
    res.json({
        id: id,
        name: 'Banana',
        category: 'dolls'
    });
    */
}

function getAllProducts(req, res) {
    Product.find({}).exec(function(err, products){
        if (err){
            console.log(err);
            res.status(404);
        }
        else {
            console.log(products);
            res.json(products);
        }
    });

    /*
    res.json([
        {
            id: '234sdf3904f903f34',
            name: 'Banana',
            category: 'dolls'
        },
        {
            id: 'svfg3fggvw45g5v',
            name: 'Lemon',
            category: 'dolls'
        }
    ])
    */
}

function enterProduct(req, res) {
    console.log(res);
    var newProduct = new Product;
    //newProduct.category = 'res';
    //newProduct.name = 'bread';
    //newProduct.category = 'food';
    //newProduct.name = 'bread';
    /*
    newProduct.save(function(err, product){
        if (err){
            console.log(err);
            res.status(404);
        }
        else {
            console.log(product);
            res.json(product);
        }
    });
    */
    
}

module.exports.getSingleProduct = getSingleProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.enterProduct = enterProduct;