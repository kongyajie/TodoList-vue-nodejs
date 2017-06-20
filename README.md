# TodoList-vue-nodejs
一个简单的TodoList示例，前端使用Vue.js+Bootstrap，后端使用Node.js+MySQL。终于把前后端中间的这堵墙给打通了，晚上奖励自己一下！:d

## Installing

前端代码目录

```
cd TodoList-client-side
npm install
```

后端代码目录

```
cd TodoList-server-side
npm install
```
下载安装[mysql](https://www.mysql.com/downloads/)

![mysql安装图1](http://olrqxpod7.bkt.clouddn.com/mysql_download_1.png "mysql安装图1")
![mysql安装图2](http://olrqxpod7.bkt.clouddn.com/mysql_download_2.png "mysql安装图2")
![mysql安装图3](http://olrqxpod7.bkt.clouddn.com/mysql_download_3.png "mysql安装图3")


建立本地数据库
```
安装完成后：
mysql -u root -p
输入安装结束时设置的密码，如111111
create database test;
use test;
create table todoList(id int auto_increment primary key, title char(30) not null);
```

## Usage

后端项目
```
cd TodoList-server-side
检查express_demo.js，确保connection连接的参数与安装mysql时设置一致
node express_demo.js
```

前端项目
```
cd TodoList-client-side
在浏览器中打开目录中的index.html
```
