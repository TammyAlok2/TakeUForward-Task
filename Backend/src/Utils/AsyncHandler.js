const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
       Promise.resolve(requestHandler(req, res, next)).catch((err) => {
         next(err);
       });
     };
   };
   
   export { asyncHandler };
   
   //using higher order function which can take parameter
   /* const asyncHandler =(fm) => async(req,res,next) =>{
   try {
       
       await fn (req,res,next)
   } catch (error) {
       res.status(error.code || 500).json({
           success:false,
           message:err.message
       })
   }
   
   } */
   