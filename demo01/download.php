
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
   <div class="container">
        <h1>请上传您的文件</h1>
        <form action="downaction.php" method="post" enctype="multipart/form-data">
              <p><label>选择文件：</label><input type="file" name="file1" required="required"></p>
              <p><input hidden type="text" value="<?php echo $_GET['flag']; ?>" name="user"></p>
              <button type="submit">点击上传</button>
        </form>
   </div>
</body>
</html>