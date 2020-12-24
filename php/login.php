<?php
    //引入文件
    include '../php/base.php';
    // 获取表单数据
    $username = $_POST['username'];
    $password = $_POST['password'];
    // echo $username,$password;

    //链接数据库
    $link = mysqli_connect('127.0.0.1','root','root','user');
    //判断数据库内是否存在$username、$password
    //查找
    $res = mysqli_query($link,"SELECT * FROM `info` WHERE `username` = '$username' AND `password` = '$password'");
    $re = mysqli_fetch_all($res);
    if($re){
        //如果存在
        echo "login success";
    }else{
        // echo "login defult";
        //如果不存在返回重新注册
        header('location:./登录.html');
    }

    //断开链接
    mysql_close($link);
?>