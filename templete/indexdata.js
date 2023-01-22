var db = openDatabase("itemDb", "1.0" , "itemDB", "65636")
$(function () {

    loadData();

        db.transaction(function(transaction){
            const sql = "CREATE TABLE Employee " +  
            "(Employee_id VARCHAR PRIMARY KEY NOT NULL, " + 
            "Employee_Name VARCHAR NOT NULL, " + 
            "Finance_Asset_Code INT NOT NULL," + 
            "Designation VARCHAR NOT NULL," + 
            "Email VARCHAR NOT NULL," + 
            "Phone VARCHAR NOT NULL," + 
            "Payroll VARCHAR NOT NULL," + 
            "AssetName VARCHAR NOT NULL," + 
            "MakeModel VARCHAR NOT NULL," + 
            "InvoiceNumber INT NOT NULL," + 
            "InvoiceDate DATETIME NOT NULL," +
            "AssetCost INT NOT NULL," + 
            "EntitlementLimit INT NOT NULL," + 
            "AmountReimbrused INT NOT NULL," + 
            "ReimbrusementDate DATETIME NOT NULL," + 
            "Status DEFAULT PENDING," + 
            "LastUpdate DATE DEFAULT (datetime('now','localtime')))"

            transaction.executeSql(sql,undefined,
                function(){
                    //    alert("Table is created")
                })
        },function(){
                //  alert("table is already created")
        })
})

$(function(){
    $("#create").click(function() {
        var Employee_id = $("#empid").val()
        var Employee_Name = $("#employeeName").val()
        var Finance_Asset_Code = $("#financeCode").val()
        var Designation = $("#designation").val()
        var Email = $("#email").val()
        var Phone = $("#phoneNumber").val()
        var Payroll = $("#payroll").val()
        var AssetName = $("#AssetName").val()
        var MakeModel = $("#MakeModel").val()
        var InvoiceNumber = $("#invoiceno").val()
        var InvoiceDate = $("#invoicedate").val()
        var AssetCost = $("#AssetCost").val()
        var EntitlementLimit = $("#Entitlement").val()
        var AmountReimbrused = $("#AmountReimbrused").val()
        var ReimbrusementDate = $("#ReimbrusementDate").val()
        // var Status = $("#Status").val()

        // console.log(Employee_id,Employee_Name,Finance_Asset_Code,Designation,Email,Phone,Payroll,AssetName,MakeModel,InvoiceNumber,InvoiceDate,AssetCost,EntitlementLimit,AmountReimbrused,ReimbrusementDate,Status);
        db.transaction(function(transaction){
            const sql = "INSERT INTO Employee(Employee_id,Employee_Name,Finance_Asset_Code,Designation,Email,Phone,Payroll,AssetName,MakeModel,InvoiceNumber,InvoiceDate,AssetCost,EntitlementLimit,AmountReimbrused,ReimbrusementDate) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            transaction.executeSql(sql,[Employee_id,Employee_Name,Finance_Asset_Code,Designation,Email,Phone,Payroll,AssetName,MakeModel,InvoiceNumber,InvoiceDate,AssetCost,EntitlementLimit,AmountReimbrused,ReimbrusementDate],
                function(){
                alert("Inserted");
                window.location.href = "./database.html";
        },function(transaction,err){
            alert(err.message);
        })
        })
    })
})

// $(function(){
//     if (!confirm("Are you sure you want to remove this table?","")) return;
//         db.transaction(function(transaction){
//             const sql = "DROP TABLE Employee";
//             transaction.executeSql(sql,undefined,
//                 function(){
//                 alert("table has been deleted");
//             },function(transaction,err){
//                 alert(err.message);
//             }) 
    
//         })
// })



function loadData(){
    $("#itemlist").children().remove();
    db.transaction(function(transaction){
        const sql = "SELECT * FROM Employee ";
        transaction.executeSql(sql,undefined,
            function(transaction,result){
                if(result.rows.length){
                    for (window.i = 0; i < result.rows.length; i++){
                        window.row=result.rows.item(i); 
                        window.Employee_id = row.Employee_id
                        Employee_Name = row.Employee_Name;
                        var Finance_Asset_Code = row.Finance_Asset_Code;
                        var AssetName = row.AssetName
                        var MakeModel = row.MakeModel;
                        var InvoiceDate =row.InvoiceDate
                        var EntitlementLimit = row.EntitlementLimit
                        var AmountReimbrused = row.AmountReimbrused
                        var ReimbrusementDate = row.ReimbrusementDate
                        var Status = row.Status;
                        var LastUpdate = row.LastUpdate;
                        // $("#itemlist").append('<tr><td>'+Employee_id+' </td><td>'+Employee_Name+' </td><td>'+Finance_Asset_Code+' </td><td>'+MakeModel+ ' </td><td>'+InvoiceDate+' </td><td>' + EntitlementLimit + '</td><td>' + AmountReimbrused + '</td><td>' + ReimbrusementDate +'</td><td>' + Status + '</td><td>' + LastUpdate + '</td><td>'+ ' <a href ="data.html" onclick = "loadEmployee(); style = "color:navy blue; text-decoration: none;" >...details</a>' + '</td>/tr>');
                        $("#itemlist").append('<tr><td>'+Employee_id+' </td><td>'+Employee_Name+' </td><td>'+Finance_Asset_Code+ '</td><td>' + AssetName + '</td><td>'+MakeModel+ ' </td><td>'+InvoiceDate+' </td><td>' + EntitlementLimit + '</td><td>' + AmountReimbrused + '</td><td>' + ReimbrusementDate +'</td><td>' + Status + '</td><td onclick = "loadEmployee();">' + LastUpdate + '</td>/tr>');
                        console.log(result.rows.item(0))
                    }  
                }
                else {
                    $("#itemlist>tbody").append('<tr><td colspan = "7" align = "center"> NO ITEM  FOUND </td><tr>');
                }


                // $('#itemlist').find('tr').click( function(){
                //     myGlobalVariable = ($(this).index()+0); 
                //     console.log(myGlobalVariable)
                
                    // $('#employeeName').append(<td>result.rows.item(myGlobalVariable)</td>)
        
            
        }) 
        
    })
}
function loadEmployee(){
$("#itemlist").delegate("tr", "click", function loadEmployee() {
    $(this).children().each(function() {
        $("#itemlist").hide();
        document.getElementById("myImageId").style.visibility = "visible"
        document.getElementById("email").style.visibility = "visible"
       // console.log("click!");
       console.log($(this).html());
       // cellText = cellText + $(this).html() + " "; } + '</tr></td>')
       $("#additem").append('<tr><td>' + "name:" + $(this).html() + "</tr></td>")
    })});
}

// $("#itemlist").delegate("tr", "click", function() {
//     $(this).children().each(function() {
//        // console.log("click!");
//        console.log($(this).html());
//        // cellText = cellText + $(this).html() + " "; } + '</tr></td>')
       
//        $("#employeeid").append('<tr><td>' + $(this).html() + "</tr></td>")
//     })});


//      $("#family").delegate("tr", "click", function() {
//                $(this).children().each(function() {
//                   // console.log("click!");
//                   // console.log($(this).html());
//                   // cellText = cellText + $(this).html() + " ";  
//                   alert($(this).html());
//                   $("#additem").append('<tr><td>' + $(this).html() + "</tr></td>")
                  
//                });
//             });



                








