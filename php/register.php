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
        //如果存在返回登录
        header('location:./登录.html');
    }else{
        //如果不存在，写入数据库，并返回登录
        mysqli_query($link,"INSERT INTO `info` (`username`,`password`) VALUES ('$username','$password')");
        header('location:./登录.html');
    }

?>