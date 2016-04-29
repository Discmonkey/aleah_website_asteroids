<?php

    $sendTo = $_POST['email'];
    $body = "Message From: $sendTo".'<br><br>'.$_POST['message'];
    $receive = 'frismo98@gmail.com'; 

    mail($receive,'New Contact From Website',$body);
