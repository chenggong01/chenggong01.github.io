<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>

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
      width:70px;
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
   <h1>请登录上传您的文件</h1>
   <div class="form">
      <form action="inaction.php" method="post">
            <p><label>账号：</label><input type="text" name="username" required="required"></p>
            <p><label>密码：</label><input type="text" name="password" required="required"></p>
            <button type="submit">登录</button>
      </form>
      </div>
   </div>
 </header>
</body>
</html>