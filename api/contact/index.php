<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['customerName']) && empty($_POST['customerEmail'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = "You have mail! Somebody is contacting you!";
	$to = "paddywackgifts@gmail.com";

	// data

	$msg = "<!DOCTYPE html>";
	$msg.= "<html>";
	$msg.= "<head><title>You have mail from Paddy Wack Gifts!</title></head>";
	$msg.= "<body>";
	$msg.= "<h1 style='color:#2A378C;'>Someone is wishing to contact you, Tiger!</h1>";
	$msg.= "<p>Name: " . $_POST['customerName'] . "</p>";
	$msg.= "<p>Email: " . $_POST['customerEmail'] . "</p>";
    $msg.= "<p>Phone: " . $_POST['customerPhone'] . "</p>";
    $msg.= "<p>They would prefer to be contacted by " . $_POST['contactMethod'] . " in the " . $_POST['contactTime'] . " time.</p>";
	$msg.= "<p>Their message: " . $_POST['message'] . "</p>";
	$msg.= "</body></html>";
	// Headers

	$headers = "From: " . strip_tags($_POST['customerEmail']) . "\r\n";
    $headers.= "Reply-To: ". strip_tags($_POST['customerEmail']) . "\r\n";
    $headers.= "CC: tiger@paddywackgifts.com\r\n";
    $headers.= "MIME-Version: 1.0\r\n";
    $headers.= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true,
		"modal" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>