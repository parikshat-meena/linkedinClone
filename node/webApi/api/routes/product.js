const express = require("express");
const mongoose = require("mongoose");
const product = require("../model/product");

const router = express.Router();

// get all data
router.get("/", (req, res, next) => {
  //   res.status(200).json({
  //     msg: "This is GET request from product",
  //   });
  product.find().then((data) => {
    res.status(200).json({
      msg: "This is GET request from product",
      productData: data,
    });
  });
});

// post request
router.post("/", (req, res, next) => {
  //   res.status(200).json({
  //     msg: "This is POST request for product",
  //     data: {
  //       name: req.body.name,
  //       price: req.body.price,
  //     },
  //   });

  //   console.log(req.body, "product ");
  const p = new product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  p.save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(p, "product ");
  res.status(200).json({
    msg: "This is POST request for product",
    status: "Product created succesfully",
    product: p,
  });
});

// get by id
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  //   res.status(200).json({
  //     msg: "This is POST request for product",
  //     product_Id: id,
  //   });

  product.findById(id).then((data) => {
    res.status(200).json({
      msg: "This is GET by ID request for product ",
      product: data,
    });
  });
});

router.put("/:productId", (req, res, next) => {
  const id = req.params.productId;

  product.findByIdAndUpdate(id, req.body).then((data) => {
    res.status(200).json({
      msg: "This is a put request for product",
      status: "Product updated successfully",
      product: req.body,
    });
  });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;

  product.findByIdAndDelete(id).then((data) => {
    res.status(200).json({
      msg: "Product deleted successfully",
      product: data,
    });
  });
});

module.exports = router;
