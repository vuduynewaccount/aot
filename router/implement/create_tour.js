let utilsSQL=require("../../utils/mysql.js");
let response=require("../../response/index.js");


module.exports = async function(req, res) {
  await utilsSQL.createTour(req.body)
  response.status="thanh cong";
  response.message="tao tour thanh cong";
  response.data=req.body
  res.json(response)
}
