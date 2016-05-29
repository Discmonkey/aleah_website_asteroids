<?php

    $sendTo = $_REQUEST['email'];
    $body = "Message From: $sendTo".' Message: '.$_REQUEST['message'];
    $receive = 'aleah.goldin@gmail.com'; 

    mail($receive,'New Contact From Website',$body);
