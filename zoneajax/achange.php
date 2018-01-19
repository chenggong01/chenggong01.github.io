<?php 
   if(isset($_POST["title"])){
       $con=mysql_connect("localhost","root","root");
       mysql_query("set names utf8",$con);
       mysql_select_db("zone",$con);

       $id=$_POST["id"];
       $title=$_POST["title"];
       $content=$_POST["content"];
       $sqlUpdate="update qqzone set title='$title',content='$content' where id='$id'";
       mysql_query($sqlUpdate);
   }
 ?>