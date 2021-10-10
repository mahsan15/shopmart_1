const express = require('express')
const router = express.Router()
const productService = require("../services/Productservice.js");

//Create
router.post("/",productService.createAProduct)

//Read ALL 
router.get("/",productService.getProducts)


//READ ONE SUPERHERO

router.get("/:id",productService.getAProduct)

//Update

router.put("/:id",productService.updateAProduct)


//DELETE
router.delete("/:id",productService.deleteAProduct)



module.exports = router