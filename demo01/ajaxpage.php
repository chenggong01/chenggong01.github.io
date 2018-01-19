<?php 
   $con=mysql_connect("localhost","root","root");
   mysql_query("set names utf8",$con);
   mysql_select_db("down",$con);
   $pagesize=6;
   $sqlPage="select count(*) count1 from downtab";
   $result=mysql_query($sqlPage);
   $row1=mysql_fetch_array($result);
   $maxpage=ceil($row1["count1"]/$pagesize);
   $page=isset($_POST["page"])?$_POST["page"]:1;
   $index=($page-1)*6;
   $limit="limit $index,6";
   $maxs=$row1["count1"]-6;
   if($page<1){
       $page=1;
       $limit="limit 0,6";
   }
   if($page>$maxpage){
         $page=$maxpage;
         $limit="limit $maxs,6";
   }

      
       $sqls="select * from downtab $limit";
       $results=mysql_query($sqls);
   while($row=mysql_fetch_array($results)){
         if($row["filetype"]=="text/plain"){
             $img="txt.jpg";
         }else if($row["filetype"]=="image/jpeg"){
           $img="jpg.jpg";
         }else if($row["filetype"]=="application/octet-st"){
               $img="zip.png";
         }
         echo "
           <tr>
            <td>".$row['id']."</td>
            <td>".$row['filename']."</td>
            <td><img src='images/".$img."'></td>
            <td>".$row['filesize']."</td>
            <td>".$row['user']."</td>
            <td>".$row['date']."</td>
            <td><a href='filedown.php?down=".$row['id']."' onclick='add(".$row['id'].")'>点击下载</a></td>
           </tr>
         ";
   }
           echo "<span>共".$maxpage."页，第".$page."页，共".$row1["count1"]."条</span><a href='jvascript:void(0)' onclick='prevpage(".($page-1).")'>上一页</a> <a href='jvascript:void(0)' onclick='nextpage(".($page+1).")'>下一页</a>";
 ?>