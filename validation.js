
const Joi = require('joi');

const reqValidation = data  =>{
    const schema = Joi.object({
        language_id: Joi.number().integer().required(),
            source_code: Joi.string().min(3).required(),
            stdin: Joi.string().empty(''),
            expected_output: Joi.string().empty(''),
            cpu_time_limit: Joi.number(),
            
    });

    return schema.validate(data);
}
module.exports.reqValidation = reqValidation;
// data = {
//     "language_id": language.id,
//     "source_code": code,
//     "stdin": input,
//     "expected_output": expected_output,
//     "cpu_time_limit": timeout
// }