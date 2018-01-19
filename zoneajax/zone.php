<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>qqzone</title>
	<style>
	 *{
	 	margin:0;
	 	padding:0;
	 	box-sizing:border-box;
	 }
	 a{
	 	text-decoration: none;
	 }
     li{
     	list-style:none;
     }

      body{
      	background:url(images/p.jpg) no-repeat;
      	background-size:cover;
      }
      .container{
      	width: 1050px;
      	margin:auto;
      	background-color:#fff;
      	padding:25px;
      	margin-top: 50px;
      	border:1px solid #65b4cb;
      }
      h3{
      	padding-top: 10px;
      }
      header .container{
      	margin-top: 0;
      	border:none;
      	background:#04b1cc;
      	padding:0;
      }
      header{
      	background-color:#04b1cc;
      	width: 100%;
      	/*position: fixed;
      	top: 0;*/
      }
      header .container .logo{
      	float: left;
      }
      header .container ul{
      	float: left;
      	margin-left: 15px;
      }
      nav::after{
      	display: table;
      	content:"";
      	clear:both;
      }
      header .container ul li{
      	float: left;
      }
      header .container ul li a{
      	color:#fff;
      	display: block;
      	padding:15px 20px;
      }
      header .container h3 .i1{
      	background:url(images/bi.png);
      	   display:inline-block;
      	   width: 24px;
      	   height: 26px;
      	   background-position: -63px -8px;
      }
      header .container ul li a:hover{
      	background-color:#00a1b9;
      }
      .container h1{
      	 color:#65b4cb;
      	 font-size: 18px;
      	 border-bottom: 2px solid #cfebf5;
      	 padding-bottom: 15px;
      }
     .container p.p1{
     	 padding:10px 0;
     	 border-bottom:1px solid #cfebf5;
     }
     label{
     	display: block;
     	width: 70px;
     	float: left;
     }
     .container form p{
     	padding-bottom: 15px;
     }
     .container form button{
     	width: 70px;
     	height: 35px;
        background:#65b4cb;
        color:#fff;
        border:none;
     }
     .container form p.p2{
     	padding-top:10px
     }

     .container .message{
     	 padding-top: 55px;
     }
     .container .message h2{
     	font-size: 20px;
     	color:#000;
     }
     .container .message h2 span a{
     	color:#65b4cb;
     	font-size:16px;
     }
     section .container ul img{
      width: 100px;
      height: 100px;
     }
     .container .message ul{
     	padding:15px;
     	border:2px solid #65b4cb;
     	margin-bottom: 15px;
     }
     .container .message ul a{
     	color:#65b4cb;
     }
     .container .message ul li{
     	padding-bottom: 10px;
     }
     section .container ul:hover{
        border:2px solid #f98cb1;
        cursor: pointer;
     }
     .w-e-toolbar{
      width: 100%;
     }
     section .container .box a{
       color:#65b4cb;
     }
	</style>
</head>
<body>
   <header>
       <div class="container">
            <nav>
                <div class="logo">
                  <h3 style="color:#fff;"><i class="i1"></i>QQ空间</h3>
                </div>
                <ul>
                   <li><a href="#">个人中心</a></li>
                   <li><a href="#">我的主页</a></li>
                   <li><a href="#">好友</a></li>
                   <li><a href="#">游戏</a></li>
                   <li><a href="#">装扮</a></li>
                </ul>
            </nav>
       </div>
   </header>
   <section>
       <div class="container">
            <h1>留言板</h1>
            <p class="p1">主人寄语</p>
            <div class="form">
                 <form action="">
                       <p class="p2"><label>留言者：</label><input type="text" required="required" id="input1"></p>
                       <p><label>题目:</label><input type="text" id="input2"></p>
                       <p><label>内容：</label></p><div id="div1" style="background:#fff;">
            <p>请写下您想说的话！</p>
        </div>
        <textarea id="text1" style="display:none;" rows="30" cols="50"></textarea>
                       <button type="button" onclick="uper()">提交</button>
                 </form>
            </div>

            <div class="message">
                <h2>留言（<span id="pan"></span>） <span><a href="#">留言板设置</a></span></h2>
                
                 <div class="box"></div>
            </div>
       
       </div>
   </section>

   <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
   <script src="release/wangEditor.js"></script>
   <script>
     var m=1;
        window.onload=function(){
              if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      var tab=document.querySelector(".box");
                      tab.innerHTML=xmlhttp.responseText;
                       var ul=document.querySelectorAll(".box ul");
                       var span=document.querySelector("#pan");
                        for(var i=0;i<ul.length;i++){
                            span.innerHTML=i+1;
                        }
                  }
           }
           xmlhttp.open("POST","page.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("flag=select");

        }  
        function nextpage(index1){
              if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      var tab=document.querySelector(".box");
                      tab.innerHTML=xmlhttp.responseText;
                  }
           }
           xmlhttp.open("POST","p2.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("page="+index1);
        }    

        function uper(){
           var input1=document.querySelector("#input1");
            var input2=document.querySelector("#input2");
            var input3=document.querySelector(".w-e-text p");


            if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      var tab=document.querySelector(".box");
                      tab.innerHTML=xmlhttp.responseText;
                  }
           }
           xmlhttp.open("POST","p2.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("user="+input1.value+"&title="+input2.value+"&content="+input3.innerHTML);

        }
        
        function del(index1){
            if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      var tab=document.querySelector(".box");
                      tab.innerHTML=xmlhttp.responseText;
                  }
           }
           xmlhttp.open("POST","p2.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("id="+index1);
        }
       
        function change(index2){
           var j= ++m;
           var ul=document.querySelector("#ul"+index2);
           var inputs=document.querySelectorAll("#ul"+index2+" input");

           var a=document.querySelector("#changeA"+index2);

           if(a.innerHTML=="修改"){
               a.innerHTML="确定修改";
               for(var i=0;i<inputs.length;i++){
                  inputs[i].disabled=false;
               }
               var p=document.querySelector("#ps"+index2);
               // var p1 = document.createElement("p");
               // p1.innerHTML = p.innerHTML;
               var div2=document.createElement("div");
               
               var par=document.querySelector("#ul"+index2+" #lis"+index2);
                div2.setAttribute("id","div"+j);
                div2.appendChild(p);
                
                par.appendChild(div2);
                
                 var E = window.wangEditor;
                 var editor = new E('#div'+j);
                 editor.create();

                 


           }else if(a.innerHTML=="确定修改"){
               var title=inputs[0].value;
               var content=document.querySelector("#ps"+index2).innerHTML;
               
               if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
           }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }

           xmlhttp.onreadystatechange=function(){
                  if(xmlhttp.readyState==4&&xmlhttp.status==200){
                      alert("修改成功");
                  }
           }
           xmlhttp.open("POST","achange.php",true);
           xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
           xmlhttp.send("id="+index2+"&title="+title+"&content="+content);

            for(var i=0;i<inputs.length;i++){
                inputs[i].disabled=true;
            }
            a.innerHTML="修改";
            var lis=document.querySelector("#lis"+index2);
            var content=document.querySelector("#ps"+index2).innerHTML;
            lis.innerHTML=content;
           }
        }
      

        

        //留言个数
        var span=document.querySelector("#pan");
        var message=document.querySelectorAll(".box ul");
        console.log(message);
        for(var i=0;i<message.length;i++){
            span.innerHTML=i;
        }

        var E = window.wangEditor
        var editor = new E('#div1');
        var $text1 = $('#text1')
        editor.customConfig.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $text1.val(html)
        }
        editor.create()
        // 初始化 textarea 的值
        $text1.val(editor.txt.html())

   </script>
</body>
</html>