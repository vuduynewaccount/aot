let utilsSQL=require("../../utils/mysql.js");
let response=require("../../response/index.js");


module.exports = async function(req, res) {
  tours = await utilsSQL.getTours()
  response.status="thanh cong";
  response.message="Lấy danh sách tour thanh cong";
  response.data=tours
  res.json(response)
}
