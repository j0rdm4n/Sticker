<?php
	if($_POST)
{
		$email = $_POST['email'];
		$password = $_POST['password'];
		$newpassword = $_POST['newpassword'];
		
	if($_POST['password'] && $_POST['email'])
		{
		$sql=mysql_query("SQl select statement");
		echo "Login success";
		}
		
	else if($_POST['newpassword'] && $_POST['email'])
	{
		$sql=mysql_query("SQl Insert values statement");
		echo "Registration Success";
	}
	
}
?>
<form method="post" action="loginup.php">

<div>
<label>Email</label> <br/>
<input type="text" name="email"/><br />
<input type="radio" name="choose" id="login" checked="checked"/> I have an account <br />
<input type="radio" name="choose" id="signup"/> I am new!<br />
</div>

<div id="login_block">
<label>Password</label><br />
<input type="password" name="password" id="password"/><br/>
<input type="submit" value=" Login "/> 
</div>

<div id="signup_block" style="display:none">
<label>Choose password</label><br/>
<input type="password" name="newpassword" id="newpassword" /><br/>
<input type="submit" value=" Signup "/>
</div>

</form>