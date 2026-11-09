<?php
if(isset($_POST['mens'])) {

$email_to = "carcubus@gmail.com";
$email_subject = "Contactox";

if(!isset($_POST['emnam']) ||
!isset($_POST['emdom']) ||
!isset($_POST['mens'])) {

echo "<b> :( :( :( </b><br />";
echo " =<<<= <br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "email-nombre: " . $_POST['emnam'] . "@" . $_POST['emdom'] . "\n";
$email_message .= "mensaje: " . $_POST['mens'] . "\n\n";


$headers = 'X-Mailer: PHP/' . phpversion();
if (mail($email_to, $email_subject, $email_message, $headers))
{
echo "¡>>> ...!";
}
}
?>