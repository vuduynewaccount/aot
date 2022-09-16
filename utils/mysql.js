var mysql = require('mysql2');
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});



let script=function(){
  con.execute(
    `CREATE TABLE User (
        UserId int PRIMARY KEY AUTO_INCREMENT,
        FullName varchar(255),
        PhoneNumber varchar(255),
        Email varchar(255),
        Company varchar(255),
        ProjectDescribe TEXT
    );`
  );

  con.execute(
    `CREATE TABLE Tour (
        ID int PRIMARY KEY AUTO_INCREMENT,
        Name varchar(255),
        Description TEXT,
        Time DATE,
        isPopular TINYINT(1),
        Style_id int,
        content TEXT,
        cover_image varchar(255),
        images TEXT
    );`
  );
}

let createUserInfo=function(data){//data= {"FullName": "Vuduy","PhoneNumber":"0399883993","Email":"ahah@gmail.com","Company":"ssss", "ProjectDescribe": "ajhansdjasdjjsjsj sjhdd  shdjhsd sdj "}
  return new Promise(async (resolve,reject)=>{
    await con.execute(
      `INSERT INTO user (FullName, PhoneNumber, Email, Company, ProjectDescribe)
       VALUES ("${data.FullName}", "${data.PhoneNumber}", "${data.Email}", "${data.Company}","${data.ProjectDescribe}");`
    );
    resolve()
  })
}

let createTour=function(data){
  return new Promise(async (resolve,reject)=>{
    await con.execute(
      `INSERT INTO tour (Name, Description,Time, isPopular, Style_id, content,cover_image,images)
       VALUES ("${data.Name}", "${data.Description}","${data.Time}", ${data.isPopular}, ${data.Style_id},"${data.content}","${data.cover_image}","${data.images}");`
    );
    resolve()
  })
}

let getTours=function(){
  return new Promise(async (resolve,reject)=>{
    await con.execute(
      `SELECT * FROM Tour;`,function(err, results, fields) {
        resolve(results); // results contains rows returned by server
      }
    );
  })
}

let command={
  script,
  createUserInfo,
  createTour,
  getTours
}

module.exports=command;
