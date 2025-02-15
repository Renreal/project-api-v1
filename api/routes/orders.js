const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Orders were fetched'
    });
});


router.post('/',(req, res, next) =>{
    const order ={
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Orders was created',
        order: order
    });
});


router.get('/:orderId',(req, res, next) =>{
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId',(req, res, next) =>{
    res.status(200).json({
        message: 'Order de leted',
        orderId: req.params.orderId
    });
});


module.exports = router;

