<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['customerName']) && empty($_POST['customerEmail'])) die();

if ($_POST)
	{

    $imageFile = $_FILES['preview']['tmp_name'];
    $imgEncoded = base64_encode(file_get_contents($imageFile));

    // set response code - 200 OK

    http_response_code(200);
    $subject = "Somebody wants a custom commission piece!";
    $to = "paddywackgifts@gmail.com";

    // data

    $msg = "<!DOCTYPE html>";
    $msg.= "<html>";
    $msg.= "<head><title>" . $_POST['customerName'] . " wants a custom commission piece, Tiger!</title></head>";
    $msg.= "<body>";
    $msg.= "<h1 style='color:#2A378C;'>You have a custom commission request!</h1>";
    $msg.= "<p>Name: " . $_POST['customerName'] . "</p>";
    $msg.= "<p>Email: " . $_POST['customerEmail'] . "</p>";
    $msg.= "<p>Phone: " . $_POST['customerPhone'] . "</p>";
    $msg.= "<p>Their message: " . $_POST['message'] . "</p>";
    $msg.= "<img alt='Requested Custom Piece' src='data:image/png;base64,$imgEncoded' />";
    $msg.= "</body></html>";
    // Headers

    $headers = "From: " . strip_tags($_POST['customerEmail']) . "\r\n";
    $headers.= "Reply-To: ". strip_tags($_POST['customerEmail']) . "\r\n";
    $headers.= "CC: tiger@paddywackgifts.com\r\n";
    $headers.= "MIME-Version: 1.0\r\n";
    $headers.= "Content-Type: multipart/form-data; charset=ISO-8859-1\r\n";

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
