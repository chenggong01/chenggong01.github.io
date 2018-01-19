<?php 
   header("Content-type:text/html;charset=utf-8");
   session_start();
   if(isset($_SESSION["username"])){
         echo "恭喜".$_SESSION["username"]."已登录<a href='download.php?flag=".$_SESSION["username"]."'>点击上传文件</a> <a href='inaction.php?flag=destroy' style='background:#000; color:#fff;'>注销</a>";
   }else{
   	 echo "<h3>您还没有登录</h3>";
   }

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>file</title>
	<style>
	*{
		margin:0;
		padding:0;
	}
	   header .container{
	   	  width: 100%;
	   	  background-color:#ff5151;
	   	  margin-top: 25px;
	   }
       .container .user{
       	  width:1050px;
       	  background-color:#ff5151;
       	  text-align: center;
       	  margin:auto;
       }
       .container .user a{
       	 color:#000;
       	 float: right;
       	 display: block;
       	 padding:10px 10px;
       	 color:#fff;

       }
       .container .user a:hover{
       	 background-color:#fff;
       	 color:#000;
       }
       .container .user::after{
       	 display: table;
       	 content:"";
       	 clear:both;
       }
        section{
       	width: 100%;
       	margin-top: 25px;
       }
       section .container{
       	width: 1050px;
       	margin:auto;
       	text-align:center;
       }
       section .dtable{
       	 width:750px;
       	 margin:auto;
       }
       h2{
       	padding-bottom: 20px;
       	color:#ff5151;
       }
       table{
       	text-align: center;
       }
       table a{
       	 color:#000;
       	 text-decoration: none;
       }
       table a:hover{
       	 color:#ff5151;
       }
       table img{
       	width: 25px;
       	height: 25px;
       }
       .container table{
       	border:1px solid #ff5151;
       }
       .container table td,.container table th{
       	  border:1px solid #ff5151;
       }
   
	</style>
</head>
<body>
	<header>
       <div class="container">
            <div class="user">
                 <a href="loginin.php">登录</a>
                 <a href="login.php">注册</a>
            </div>
       </div>
	</header>
	<section>
         <div class="container">
             <div class="dtable">
              <h2>用户上传的文件</h2>
              <table row="5">
                <tr>
                 <th>序号</th>
                 <th>文件名</th>
                 <th>文件类型</th>
                 <th>文件大小</th>
                 <th>上传者</th>
                 <th>上传时间</th>
                 <th>下载</th>
              </tr>
              <tbody id="heade">

              </tbody>
              </table>
              </div>
         </div>
	</section>
    
    <script>
       //页面加载时显示需要下载文件的内容
        window.onload=function(){
        	var tr=document.querySelector("#heade");
        	var xmlhttp;
            if(window.XMLHttpRequest){
                  xmlhttp=new XMLHttpRequest();
            }else{
            	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function(){
            	if(xmlhttp.readyState==4&&xmlhttp.status==200){
                     tr.innerHTML=xmlhttp.responseText;
            	}
            }
            xmlhttp.open("POST","ajax.php",true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send("flag=select");
        }
        //点击增加下载次数
        function add(index1){
        	
        	 var a1=document.querySelector("#add"+index1);
        	 a1.innerHTML++;
        	 var xmlhttp;
        	 if(window.XMLHttpRequest){
                  xmlhttp=new XMLHttpRequest();
            }else{
            	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function(){
            	if(xmlhttp.readyState==4&&xmlhttp.status==200){
                   
            	}
            }
            xmlhttp.open("POST","filedown.php",true);
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send("loading="+index1);
        }

        // 下一页
        function nextpage(index){

        	if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
           	   var tr=document.querySelector("#heade");
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      
                      tr.innerHTML=xmlhttp.responseText;
                  }
           }
           xmlhttp.open("POST","ajaxpage.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("page="+index);
        }
        
        function prevpage(index){
        	if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
           	   var tr=document.querySelector("#heade");
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      
                      tr.innerHTML=xmlhttp.responseText;
                  }
           }
           xmlhttp.open("POST","ajaxpage.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("page="+index);
        }
    </script>
</body>
</html>