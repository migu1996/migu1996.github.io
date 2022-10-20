<?php
    $name = $_POST["myName""];
    $email = $_POST['myEmail'];
    $information = $_POST['myInformation'];
    $subject = "Sponsoring"

    $mailheader = "From:$".$name."<".$email">\r\n";
    $recipient = "michael.weppernig@gmail.com";
    
    mail($recipient, $subject, $information, $mailheader)
    or die ("Error");

    echo"message send";





?>