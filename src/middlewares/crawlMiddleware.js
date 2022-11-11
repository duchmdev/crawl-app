let midInsta = async (req, res, next) => {
    if(req.query.q){
       return next();
    }

   res.status(500).json({
      errCode: 1,
      errMessage: "Missing required parameter",
    });
};


  
module.exports = {
  midInsta: midInsta,
};
  
