<?php
   session_start(); 
   header("Content-type:text/html;charset=utf-8");
   if(isset($_POST["username"])){
         $con=mysql_connect("localhost","root","root");
   if(!$con){
        echo "链接错误";
   }

    $username=$_POST["username"];
    $password=$_POST["password"];

     mysql_query("set names utf8",$con);
     mysql_select_db("reg",$con);
     $sql="select username,password from reger where username='$username' and password='$password'";
     $result=mysql_query($sql);
     $num=mysql_num_rows($result);
     if($num){
         $row=mysql_fetch_array($result);
         $_SESSION["username"]=$username;
         header("Location:download.php?flag=$username");
     }else{
       echo "<script>alert('账号密码错误');</script>";
       header("Location:loginin.php");
     }
   }

   if(isset($_GET["flag"])){
        if($_GET["flag"]==="destroy"){
                session_unset();
                session_destroy();
                header("Location:index.php");
           }
   }
 ?>