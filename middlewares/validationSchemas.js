import Joi from "joi";

const userSchema={

    createUser: Joi.object({

        email:Joi.string().email().required().messages({
            "string.email":"Invalid email address"
        }),
        password:Joi.string().min(8).required().messages({
            'string.min':"Password must be atleast 8 characters long",
        })
    }),

    loginUser:Joi.object({
        email:Joi.string().email().required().messages({
            "string.email":"Invalid email address"
        }),
        password:Joi.string().min(8).required().messages({
            'string.min':"Password must be atleast 8 characters long"
        })
    })

}

export default userSchema