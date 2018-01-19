<?php 
   header("Content-type:text/html; charset=utf-8");
   $con=mysql_connect("localhost","root","root");
   if(!$con){
        echo "链接错误";
   }
   
   $username=$_POST["username"];
   $password=$_POST["password"];
   mysql_query("set names utf8",$con);
   mysql_select_db("reg",$con);
   $sql="select username from reger where username='$username'";
   $result=mysql_query($sql);

   $num=mysql_num_rows($result);

   if($num){
       echo "<h1>注册失败这个账号已存在了</h1>";
       
   }else{
   	  $sqls="insert into reger(username,password) values('$username','$password')";
   	  mysql_query($sqls);
   	  echo "<h1>恭喜".$username."注册成功</h1>";

   }
   
 ?>