function GenerateOTP() {  
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
       OTP += digits[Math.floor(Math.random() * 10)];
    }
    document.getElementById("txtOTP").value = OTP;  
    console.log(OTP)
}   

//   function validateUser() {
//         var x = document.getElementById("username").value;
//         var y = document.getElementById("pass").value;
//         // const cmdsql = "SELECT * FROM admin WHERE"
//         if 
//         ( x == "Anuj" && y == "123")
//         {
//           alert("Login successfully");
//           window.location.href = "./index.html"; // Redirecting to other page
//         }
//         else{
//           alert("wrong username or password");
//         }
//         console.log(x);
//         console.log(y);
//     }

    function ValidOTP() {   
    var str1 = document.getElementById("txtOTP").value;  
    var str2 = document.getElementById("OTPCompare").value;  
    if (str1 == str2) return window.alert("Your data has been saved click on sign in");  
    return window.alert("OTP not matched!!!");   
  }  


//   function login(){
//       if(req.method = "POST")
//       {
//           var post = req.body;
//           var name = req.UserName;
//           var pass = req.password;
//           db.transaction(function(transaction)
//           {
//               var sql = "SELECT TOP 1 * FROM admin WHERE (UserName,password) VALUES(?,?)";
//               transaction.executeSql(sql,[name,pass],function(){}
//             },function(err){
//                 alert(err.message);
//             })

  function signUp() {
    if (ValidOTP() === true) {
  window.alert("your data is being saved");
}
}
var db = openDatabase("AdminDB", "1.0" , "AdminDB", "65636")

$(function() {
        db.transaction(function(transaction){
            const sql = "CREATE TABLE Admins " +  
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, " + 
            "Admin_Name VARCHAR(100) NOT NULL, " + 
            "UserName INT(5) NOT NULL," + 
            "password VARCHAR(200) NOT NULL,"+
            "email VARCHAR(200) NOT NULL, " + 
            "phoneNumber VARCHAR(200) NOT NULL)"
            transaction.executeSql(sql,undefined,
                function(){
                    // alert("created")
        },function(){
            // alert("table is already created")
        })
    })
})
$(function(){
    $("#create").click(function() {
        var Admin_Name = $("#name").val()
        var UserName = $("#Username").val()
        var password = $("#Password").val()
        var email = $("#email").val()
        var phoneNumber = $("#phoneNumber").val()

        console.log(Admin_Name,UserName,password,email,phoneNumber);
        db.transaction(function(transaction){
            const sql = "INSERT INTO Admins(Admin_Name,UserName,password,email,phoneNumber) VALUES(?,?,?,?,?)";
            transaction.executeSql(sql,[Admin_Name,UserName,password,email,phoneNumber],
                function(){
                alert("Inserted");
                console.log(Admin_Name,UserName,password,email,phoneNumber);
        },function(transaction,err){
            alert(err.message);
        })
        })
    })
})


$(function (){
    $("#remove").click(function(){
        if (!confirm("Are you sure you want to remove this table?","")) return;
        db.transaction(function(transaction){
            const sql = "DROP TABLE Admins";
            transaction.executeSql(sql,undefined,
                function(){
                alert("table has been deleted");
            },function(transaction,err){
                alert(err.message);
            }) 
    
        })
    })
})

