const customerModel = require("../models/CustomerModel.js");
const bcrypt = require('bcryptjs');


exports.createACustomer =(req,res)=>{

    
    
    bcrypt.genSalt(10, (err, salt) => { 
        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if (err)
                reject('Error encrypting the password');
                req.body.password = hash;
        })
    })



    const customer = new customerModel(req.body);
    customer.save()
    .then((newCust)=>{

        res.json({
            message :"The Customer Was successfully created and stored in the databaase",
            data : newCust
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};


exports.getCustomers =(req,res)=>{

    customerModel.find()
    .then(customers=>{

        res.json({
            message : "A list of all the Customers",
            data : customers,
            totalCustomers : customers.length
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};


exports.getACustomer=(req,res)=>{


    customerModel.findById(req.params.id)
    .then(cust=>{

        if(cust)
        {
            res.json({

                message : `Customer with the id ${req.params.id}`,
                data : cust
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no Customer in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};


exports.updateACustomer =(req,res)=>{


    customerModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(cust=>{


        //if hero is not null

        if(cust)
        {
            res.json({
                message : `The Customer with the id ${req.params.id} was updated`,
                data : cust
            })

        }

        //hero contains null
        else
        {
            res.status(404).json({
                message : `Customer with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.deleteACustomer=(req,res)=>{

    
    customerModel.findByIdAndRemove(req.params.id)
    .then((cust)=>{

        if(cust)
        {
            res.json({
                message: `The Customer with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `Customer with ID ${req.params.id} was not found`
            })
        }


    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};