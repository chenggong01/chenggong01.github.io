<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>login</title>

  <style>
     *{
      margin:0;
      padding:0;
      box-sizing:border-box;
     }
     header{
        width: 100%;
        min-width: 1050px;
        background-color:#ff5151;
        padding:55px 0;
     }
     header .container{
      width: 1050px;
      margin:auto;
      background-color:#fff;
      padding:35px;
     }
     h1{
      text-align: center;
     }
     form{
      width: 500px;
      padding:50px 20px;
      border:2px solid #000;
      margin:auto;
      font-size:18px;
     }
     form label{
      display: block;
      width:100px;
      float: left;
     }
     button{
      width: 70px;
      height: 30px;
      margin:auto;
      margin-left: 35%;
      margin-top: 15px;
     }
  </style>
</head>
<body>
  <header>
   <div class="container">
   <h1>请填写您的注册信息</h1>
   <div class="form">
        <form action="loginaction.php" method="post">
              <p><label>账号：</label><input type="text" name="username" id="user"></p>
              <p><label>密码:</label><input type="text" name="password" id="pwd"></p>
              <p><label>确认密码:</label><input type="text" id="pwds"></p>
              <button type="button" onclick="check()">点击提交</button>
        </form>
   </div>
   </div>
  </header>

   <script>
      var user=document.querySelector("#user");
      var password=document.querySelector("#pwd");
      var passwords=document.querySelector("#pwds");
      var form=document.querySelector("form");
      function check(){
         if(user.value!==""){
              if(password.value==passwords.value){
                   form.submit();
              }else{
              	alert("确认密码不正确");
              	return false;
              }
         }else{
          alert("账号不能为空");
         }
      }
   </script> 

</body>
</html>