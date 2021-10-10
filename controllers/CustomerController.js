const express = require('express')
const router = express.Router()
const customerService = require("../services/CustomerService.js");

//Create
router.post("/",customerService.createACustomer)

//Read ALL 
router.get("/",customerService.getCustomers)


//READ ONE SUPERHERO

router.get("/:id",customerService.getACustomer)

//Update

router.put("/:id",customerService.updateACustomer)


//DELETE
router.delete("/:id",customerService.deleteACustomer)



module.exports = router