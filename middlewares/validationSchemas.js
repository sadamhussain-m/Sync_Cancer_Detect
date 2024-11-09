import Joi from "joi";

const userSchema={

    createUser: Joi.object({

        email:Joi.string().email().required().messages({
            "string.email":"Invalid email address"
        }),
        password:Joi.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[!@#$^&*]/).required().messages({
            'string.min':"Password must be atleast 8 characters long",
        }),
        repeatPassword:Joi.valid(Joi.ref('password')).required().messages({
            'any.only':'Passwords do not match',
            'any.required':'Repeat password is required'
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