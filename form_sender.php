<?php

$to = "eric.puigmarti@gmail.com";
$from = "mail@example.com";

$headers = "From: " . $from . "\r\n";

$subject = "E-Mail From EricPuigmarti.com";
$body = "Name: " . $_POST['name'];
$body = "Content: " . $_POST['comments'];





if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
{ 
	if (mail($to, $subject, $body, $headers, "-f " . $from))
	{
		echo 'Alright ! You will be notified on <b>  ' . $_POST['email'] . '</b> :)';
	}
	else
	{
	   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';	
	}
}
else
{
   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';	
}