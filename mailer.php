<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
/*
    @filename: Mailer.php
    @version: 1.0
    @desc: Mailer that receive $_POST data and that is formated and sended by email.

     _
    |_|    __ _  _  |  _ |_
    | ||_| | (/_(_) | (_||_)

    Fabian Ramirez
    fabian.ramirez@aureolab.cl

*/

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

if(!empty($_POST)) {
  try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = '';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = '';                     // SMTP username
    $mail->Password   = '';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($_POST['nombre'], $_POST['email']);
    $mail->addAddress('samuel@aureolab.cl');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Nueva cotización online';
    
    // Messages
    $message = "Estimad@:\n\n";
    $message .= "Hemos recibido una nueva cotización vía Web. A continuación se muestran los detalles:\n\n";

    foreach ($_POST as $key => $value) {
        $message .= " - " . ucfirst(str_replace("-", " ", $key)) . ": " . $value . "\n";
    }

    $message .= "\n\nComo buena practica, deberíamos responder dentro de las 24 horas.\n";
    $message .= "Equipo Aureolab";

    $mail->Body    = $message;
    $mail->AltBody = $message;

    if ( $mail->send() ) {
      echo json_encode([
        "success" => true,
      ]);
    } else {
      echo json_encode([
        "error" => true,
      ]);
    }
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}
