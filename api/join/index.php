<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['joinName']) && empty($_POST['joinEmail'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = "Somebody wants to join the Paddy Wack Community!";
	$to = "paddywackgifts@gmail.com";

	// data

	$msg = "<!DOCTYPE html>";
	$msg.= "<html>";
	$msg.= "<head><title>" . $_POST['joinName'] . " wants to join the Paddy Wack Community!</title></head>";
	$msg.= "<body>";
	$msg.= "<h1 style='color:#2A378C;'>You have a join request!</h1>";
	$msg.= "<p>Name: " . $_POST['joinName'] . "</p>";
	$msg.= "<p>Email: " . $_POST['joinEmail'] . "</p>";
	$msg.= "<p>Phone: " . $_POST['joinPhone'] . "</p>";
	$msg.= "<p>Country: " . $_POST['joinCountry'] . "</p>";
	$msg.= "<p>Their message: " . $_POST['message'] . "</p>";
	$msg.= "</body></html>";
	// Headers

	$headers = "From: " . strip_tags($_POST['joinEmail']) . "\r\n";
    $headers.= "Reply-To: ". strip_tags($_POST['joinEmail']) . "\r\n";
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