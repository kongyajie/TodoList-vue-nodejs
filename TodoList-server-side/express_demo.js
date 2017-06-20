var express = require('express');
var app = express();

var mysql = require('mysql');
//根据本机实际情况填写
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'test'
});

connection.connect();

//设置跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//返回列表数据
var getTodoList = function (res) {
    var sql = 'SELECT * from todoList';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR]', err.message);
            return;
        };
        res.end(JSON.stringify(result));
    });
};

//查询列表
app.get('/api/todoList', function (req, res) {
    getTodoList(res);
})

//新增
app.get('/api/addTodo', function (req, res) {
    var addSql = 'INSERT INTO todoList(id,title) values(0,?)';
    var addSqlParams = [req.query.title];
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR]', err.message);
            return;
        }
        getTodoList(res);
    });
})

//删除
app.get('/api/delTodo', function (req, res) {
    var sql = "DELETE FROM todoList WHERE id=" + req.query.id;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR]', err.message);
            return;
        }
        getTodoList(res);
    });
})

var server = app.listen(8083, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})