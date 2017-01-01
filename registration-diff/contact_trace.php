<?php
$recipient_email    = "ilynva@gmail.com"; //recepient
// $from_email         = "info@your_domain.com"; //from email using site domain.
$from_email         = "ilyna.lora@gmail.com";

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	die('Sorry Request must be Ajax POST'); //exit script
}

if($_POST){
    
    // capture and transform data from the form
    $sender_name 	= filter_var($_POST["name"], FILTER_SANITIZE_STRING); //capture sender name
    $sender_email 	= filter_var($_POST["email"], FILTER_SANITIZE_STRING); //capture sender email
    $country_code   = filter_var($_POST["phone1"], FILTER_SANITIZE_NUMBER_INT);
    $phone_number   = filter_var($_POST["phone2"], FILTER_SANITIZE_NUMBER_INT);
//    $subject        = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $subject = "TRACE 2017 RegForm";
    $message 		= filter_var($_POST["message"], FILTER_SANITIZE_STRING); //capture message
    //
    $sender_lastname = filter_var($_POST["lastname"], FILTER_SANITIZE_STRING);
    $sender_addressing = filter_var($_POST["addressing"], FILTER_SANITIZE_STRING);
    $sender_country = filter_var($_POST["country"], FILTER_SANITIZE_STRING);
//    $sender_ = filter_var($_POST[""], FILTER_SANITIZE_STRING);
    $sender_affiliation = filter_var($_POST["affiliation"], FILTER_SANITIZE_STRING);
    $sender_position = filter_var($_POST["position"], FILTER_SANITIZE_STRING);
    $sender_presentation = filter_var($_POST["presentation"], FILTER_SANITIZE_STRING);
//    $sender_message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $sender_title = filter_var($_POST["title"], FILTER_SANITIZE_STRING);
    $sender_visa = filter_var($_POST["visa"], FILTER_SANITIZE_STRING);
    $sender_may16 = filter_var($_POST["may16"], FILTER_SANITIZE_STRING);
    $sender_may17 = filter_var($_POST["may17"], FILTER_SANITIZE_STRING);
    $sender_excursioncheckbox = filter_var($_POST["excursioncheckbox"], FILTER_SANITIZE_STRING);
    // $sender_dinner = filter_var($_POST["dinner"], FILTER_SANITIZE_STRING);
    //
    $attachments = $_FILES['file_attach'];
    
	
    //php validation TRACE 2017 data form
    if(strlen($sender_name)<4){ // If length is less than 4 it will output JSON error.
        print json_encode(array('type'=>'error', 'text' => 'First name is too short or empty!'));
        exit;
    }
    if(!filter_var($sender_email, FILTER_VALIDATE_EMAIL)){ //email validation
        print json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
        exit;
    }
    if(!filter_var($country_code, FILTER_VALIDATE_INT)){ //check for valid numbers in country code field
        $output = json_encode(array('type'=>'error', 'text' => 'Enter only digits in country code'));
        exit;
    }
    if(!filter_var($phone_number, FILTER_SANITIZE_NUMBER_FLOAT)){ //check for valid numbers in phone number field
        print json_encode(array('type'=>'error', 'text' => 'Enter only digits in phone number'));
        exit;
    }
    /*if(strlen($subject)<3){ //check emtpy subject
        print json_encode(array('type'=>'error', 'text' => 'Subject is required'));
        exit;
    }*/
    /*if(strlen($message)<3){ //check emtpy message
        print json_encode(array('type'=>'error', 'text' => 'Too short Abstract Submission Message! Please enter something.'));
        exit;
    }*/

    
    
    
    
    $file_count = count($attachments['name']); //count total files attached
    $boundary = md5("sanwebe.com"); 
            
    if($file_count > 0){ //if attachment exists
        //header
        $headers = "MIME-Version: 1.0\r\n"; 
        $headers .= "From:".$from_email."\r\n"; 
        $headers .= "Reply-To: ".$sender_email."" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n"; 
        
        //message text
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n"; 
//        $body .= chunk_split(base64_encode($message));
        // Writing your letter by filling out the form 
        $form_body  = "TRACE2017 Registration Form\r\n"; 
        $form_body .= "===============================\r\n";
        $form_body .= "First name: ".$sender_name."\r\n";
        $form_body .= "Last name: ".$sender_lastname."\r\n";
        $form_body .= "Form of addressing: ".$sender_addressing."\r\n";
        $form_body .= "Country: ".$sender_country."\r\n";
        $form_body .= "Affiliation: ".$sender_affiliation."\r\n";
        $form_body .= "Position: ".$sender_position."\r\n";
        $form_body .= "Type of presentation: ".$sender_presentation."\r\n";
        $form_body .= "Presentation Title: ".$sender_title."\r\n";
//        $form_body .= "Abstract Submission Message: ".$sender_message."\r\n";
        $form_body .= "Email adress: ".$sender_email."\r\n";
        $form_body .= "Phone number: ".$country_code."-".$phone_number."\r\n";
        $form_body .= "Do you need visa: ".$sender_visa."\r\n";
        $form_body .= "Short courses, May 16: ".$sender_may16."\r\n";
        $form_body .= "Short courses, May 17: ".$sender_may17."\r\n";
        /*
        if($sender_excursioncheckbox == ""){
            $form_body .= "Excursion Kaliningrad and Baltic Federal University: No\r\n";
        }else{
            $form_body .= "Excursion Kaliningrad and Baltic Federal University: Yes\r\n";
        }*/
        
        $form_body .= "Excursion: ".$sender_excursioncheckbox."\r\n";
        // $form_body .= "Conference dinner: ".$sender_dinner."\r\n";
//        $form_body .= ": ".."\r\n";
        $form_body .= "===============================\r\n";
        //
        $body .= chunk_split(base64_encode($form_body));
        //attachments
        for ($x = 0; $x < $file_count; $x++){       
            if(!empty($attachments['name'][$x])){
                
                if($attachments['error'][$x]>0) //exit script and output error if we encounter any
                {
                    $mymsg = array( 
                    1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini", 
                    2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form", 
                    3=>"The uploaded file was only partially uploaded", 
                    4=>"No file was uploaded", 
                    6=>"Missing a temporary folder" ); 
                    print  json_encode( array('type'=>'error',$mymsg[$attachments['error'][$x]]) ); 
					exit;
                }
                
                //get file info
                $file_name = $attachments['name'][$x];
                $file_size = $attachments['size'][$x];
                $file_type = $attachments['type'][$x];
                
                //read file 
                $handle = fopen($attachments['tmp_name'][$x], "r");
                $content = fread($handle, $file_size);
                fclose($handle);
                $encoded_content = chunk_split(base64_encode($content)); //split into smaller chunks (RFC 2045)
                
                $body .= "--$boundary\r\n";
                $body .="Content-Type: $file_type; name=".$file_name."\r\n";
                $body .="Content-Disposition: attachment; filename=".$file_name."\r\n";
                $body .="Content-Transfer-Encoding: base64\r\n";
                $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n"; 
                $body .= $encoded_content; 
            }
        }

    }else{ //send plain email otherwise
       $headers = "From:".$from_email."\r\n".
        "Reply-To: ".$sender_email. "\n" .
        "X-Mailer: PHP/" . phpversion();
        $body = $message;
    }
        
    $sentMail = mail($recipient_email, $subject, $body, $headers);
    if($sentMail) //output success or failure messages
    {       
        print json_encode(array('type'=>'done', 'text' => 'Thank you for your registration. To print forms, press Ctr-P.'));
		exit;
    }else{
//        print json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        print json_encode(array('type'=>'error', 'text' => 'Could not send registration! Please send e-mail: TRACE2017russia@mail.ru.'));
		exit;
    }
    //
}
?>