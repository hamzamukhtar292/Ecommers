import Joi from "@hapi/joi";

const name = Joi.string().max(255).required().label('Name');
const email = Joi.string().email().required().label('Email');
const username = Joi.string().max(255).min(3).required().label('Username');
const password = Joi.string().max(30).min(4).required()
.regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d).*$/)
.label('Password')
.messages({
    "string.regex":"Must have Allest Uppercase lowercase and digit"
})

export const loginValidate = Joi.object().keys({
    username,
    password
})
export const registerValidate = Joi.object().keys({
    name,
    email,
    username,
    password
})