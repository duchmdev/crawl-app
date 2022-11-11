  import InstagramService from "../services/Extra/InstagramService";
  // import TiktokService from "../services/Extra/TiktokService";
  
  let getInstagram = async (req, res) => {
      try {
              let infor = await InstagramService.getItemByKeyword(req.query.q);
              console.log("infor",infor)
              return res.status(200).json(infor);
      } catch (e) {
        return res.status(500).json({
          errCode: 1,
          errMessage: "Error from server",
        });
      }
  };
  
  // let getTiktok = async (req, res) => {
  //   try {
  //           let infor = await TiktokService.getItemByKeyword();
  //           return res.status(200).json(infor);
  //   } catch (e) {
  //     return res.status(500).json({
  //       errCode: 1,
  //       errMessage: "Error from server",
  //     });
  //   }
  // };
  
  let getHello = async (req, res) => {
    try {
            return res.status(200).json({
              errCode:0,
              errMessage:"Hello data"
            });
    } catch (e) {
      return res.status(500).json({
        errCode: 1,
        errMessage: "Error from server",
      });
    }
  };
  
  
  
    
  module.exports = {
    getInstagram: getInstagram,
    // getTiktok:getTiktok,
    getHello:getHello
  };
    
  
  