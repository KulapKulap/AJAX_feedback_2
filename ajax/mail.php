<?php
    $email=$_POST['email'];
    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];

    $subject="?utf-8?B?".base64_encode("AJAX message")."?=";
    $headers="From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success=mail("svetic.1992199219921992@gmail.com", $subject, $message, $headers);
    echo $success;
?>