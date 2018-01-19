<?php 
   $con=mysql_connect("localhost","root","root");
             mysql_query("set names utf8",$con);
              mysql_select_db("zone",$con);
               
              date_default_timezone_set('PRC');
              $date=date("Y/m/d h:i:s");


              if(isset($_POST["user"])){
                 $user=$_POST["user"];
                 $title=$_POST["title"];
                 $content=$_POST["content"];
                  $sqlInsert="insert into qqzone(user,title,content,date) values('$user','$title','$content','$date')";
                  mysql_query($sqlInsert);
              }

              if(isset($_POST["id"])){
                $id=$_POST["id"];
                $sqlDelete="delete from qqzone where id=$id";
                mysql_query($sqlDelete);
              }

              $pagesize=4;
              $sqls="select count(*) count1 from qqzone";
              $result2=mysql_query($sqls);

              $row1=mysql_fetch_array($result2);
             $maxpage=ceil($row1["count1"]/$pagesize);
             $page=isset($_POST["page"])?$_POST["page"]:1;

             $index=($page-1)*4;
             $limit="limit $index,4";
             $maxs=$row1["count1"]-4;
             if($page<1){
                $page=1;
                $limit="limit 0,$pagesize"; 
             }
             if($page>$maxpage){
                      $page=$maxpage;
                      $limit="limit $maxs,$pagesize";             
             }
 
              $sql="select * from qqzone $limit";
             $result=mysql_query($sql);
             


       while($row=mysql_fetch_array($result)){
                   echo " 
                       <ul id='ul".$row["id"]."'>
                          <li>".$row['user']."</li>
                          <li><input value='".$row['title']."' disabled></li>
                          <li id='lis".$row["id"]."'><p id='ps".$row["id"]."'>".$row['content']."</p></li>
                           <li>".$row['date']."</li>
                           <li><a href='#' onclick='del($row[id])'>删除</a> <a href='javascript:void(0)' onclick='change($row[id])' id='changeA".$row['id']."'>修改</a></li>
                       </ul>
                   ";
              }
              echo "<span>共".$maxpage."页，第".$page."页，共".$row1["count1"]."条</span><a href='jvascript:void(0)' onclick='nextpage(".($page-1).")'>上一页</a> <a href='jvascript:void(0)' onclick='nextpage(".($page+1).")'>下一页</a>";

 ?>