const express = require("express");
const router = express.Router();
const crudController =require("../controllers/CrudController");
const { body } = require("express-validator");
const middleware=require("../middleware/index");
router.post("/data/add",
    [
    body("name", "name minimum 2 charcatre").isLength({ min: 2 }),
    body("email", "required a valid email").isEmail()
    ],
    crudController.addData
    )
router.get("/data",middleware.crudmiddleware, crudController.fetchdata);
module .exports =router;