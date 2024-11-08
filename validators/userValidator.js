import Joi from "joi";

const userSchema=Joi.object({

    email:Joi.string().email().required().messages({
        "string.email":"Invalid email address",
        "any.required":"Email is required"
    }),
    password:Joi.string().min(8).required().messages({
        'string.min':"Password must be atleast 8 characters long",
        "any.required":"Password is required"
    })
})

export default userSchema;