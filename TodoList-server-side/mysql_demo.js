var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'test'
});

connection.connect();

var sql = 'SELECT * from student_info';
var addSql = "INSERT INTO student_info values('4','Aaron4','male',40,'Shanghai')";
var updateSql = "UPDATE student_info SET name=?,address=? WHERE id=4";
var updateParams = ['AAAAA','HUBEI'];
var delSql = "DELETE FROM student_info where id=4";

// connection.query(sql, function(err, results, fields){
//     if(err) {
//         console.log('[SELECT ERROR]', err.message);
//         return;
//     }
//     console.log(results);
// });

// connection.query(addSql, function(err, result){
//     if(err) {
//         console.log('[INSERT ERROR]', err.message);
//         return;
//     }
//     console.log(result);
// });

// connection.query(updateSql, updateParams, function(err, result){
//     if(err) {
//         console.log('[UPDATE ERROR]', err.message);
//         return;
//     }
//     console.log(result);
// });

connection.query(delSql, function(err, result){
    if(err) {
        console.log('[DELETE ERROR]', err.message);
        return;
    }
    console.log(result);
});

connection.end();