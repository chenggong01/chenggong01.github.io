<?php 
   header("Content-type:text/html; charset=utf-8");
 
          $con=mysql_connect("localhost","root","root");
   mysql_query("set names utf8",$con);
   mysql_select_db("down",$con);
   date_default_timezone_set('PRC');
   $date=date("Y/m/d h:i:s");

   $username=$_POST["user"];
   $file=$_FILES["file1"];
   $filename=$file["name"];
   $filetype=$file["type"];
   $filesize=ceil($file["size"]/1024)."kb";
   $sql="insert into downtab(filename,filetype,filesize,user,date) values('$filename','$filetype','$filesize','$username','$date')";
   $result=mysql_query($sql);
    
   move_uploaded_file($file["tmp_name"],$file["name"]);

   

 ?>