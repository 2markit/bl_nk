<?php
$EmailFrom = "info@blank.inc";
$EmailTo = "jakemckenzie19@gmail.com";
$Subject = "Blank Inc. Contact Form";
$Name = Trim(stripslashes($_POST['Name']));
$Tel = Trim(stripslashes($_POST['Tel']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
	<script language="javascript" type="text/javascript">
    alert('Thank you for your correspondence. We will contact you shortly.');
    window.location = 'index.html';
	</script>
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
	<script language="javascript" type="text/javascript">
    alert('Message failed. Please, send an email to info@blank.inc');
	</script>
}
?>
