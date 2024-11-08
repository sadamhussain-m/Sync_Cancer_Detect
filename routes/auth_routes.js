
import userSchema from "../middlewares/validationSchemas.js"
import { Router } from "express"
import validator from "../middlewares/validator.js";
import registerUser from "../controller/userController.js";

const router=Router();

router.post('/signup',validator(userSchema.createUser),registerUser
);


export default router;