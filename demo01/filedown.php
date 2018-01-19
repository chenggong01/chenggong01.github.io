<?php 
   header("Content-type:text/html;charset=utf-8");
    if(isset($_GET["down"])){
    	$down=$_GET["down"];
        $con=mysql_connect("localhost","root","root");
        mysql_query("set names utf8",$con);
        mysql_select_db("down",$con);
        $sql="select * from downtab where id=$down";
        $result=mysql_query($sql); 

        while($row=mysql_fetch_array($result)){
                 $files=fopen($row["filename"],"r");
                 $filesize=filesize($row["filename"]);
                 header("Content-type: application/octet-stream"); 
      header("Accept-Ranges: bytes");
    header("Accept-Length:".$row['filesize']."");
    header("Content-Disposition: attachment; filename='".$row["filename"]."'");
        }
        echo fread($files,$filesize);
        
    }
 ?>