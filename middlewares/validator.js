const validator=(schema)=>{
   
    return async(req,res,next)=>{

        console.log('incoming request body',req.body);
        console.log("schema input"+schema);
        try{
            const validated=await schema.validateAsync(req.body,{
                abortEarly:false,
                stripUnknown:true
            })
            req.body=validated;
            next();
        }
        catch(err){

            const errors=err.details.map(detail=>({
                field:detail.context.key,
                message:detail.message
            }));

            return res.status(400).json({
                status:'error',
                errors:errors
            })
        }
        
    }
}
export default validator