<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>TRACE 2017 Rgeistration Form</title>
<link href="regformstyle.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="favicon.png" />
</head>

<body>
<!-- <img src="http://trace2017.sfu-kras.ru/images/trace-images/top.jpg"> -->
<div class="form-style-logo"></div>
<div class="form-style" id="contact_form">
    <div class="form-style-heading">Registration Form</div>
    
    Before to start the registration procedure please  prepare your abstarct fitting the <a href="http://trace2017.sfu-kras.ru/docs/trace_2017_abstract_template.docx" style="color:#801212;"><u><b> abstract template </b></u> </a> and if you need visa prepare the pdf copy of your valid international passport and filled 
    
    <a href="http://trace2017.sfu-kras.ru/docs/Visa_invitation_application_form-2.docx" style="color:#801212;"><u><b>visa-invitation form.</b></u></a>
    
    
    
    <div class="form-style-heading3"></div>
    <div id="contact_results"></div>
    <form id="contact_body" method="post" action="contact_trace.php">
        <label for="name"><span>First name <span class="required">*</span></span>
            <input type="text" name="name" placeholder="First name" value="First name" data-required="true"/>
        </label>
        <label for="lastname"><span>Last name <span class="required">*</span></span>
            <input type="text" name="lastname" placeholder="Last name" value="Last name" data-required="true"/>
        </label>
        <!-- Form of addressing -->
        <label for="addressing"><span>Form of addressing<span class="required">*</span></span>
            <input type="radio" name="addressing" value="Dr."  checked="checked"/> Dr.
            <input type="radio" name="addressing" value="Prof."/> Prof. 
            <input type="radio" name="addressing" value="Mr"/> Mr 
            <input type="radio" name="addressing" value="Mrs"/> Mrs <br/>
           
        </label><br>
        <!-- Form of addressing -->
        <label for="country"><span>Country<span class="required">*</span></span>
            <input type="text" name="country" placeholder="Country" value="Country"  data-required="true"/>
        </label>
        <label for="affiliation"><span>Affiliation<span class="required">*</span></span>
            <input type="text" name="affiliation"  placeholder="Affiliation" value="Affiliation" data-required="true"/>
        </label>
        <label for="position"><span>Position<span class="required">*</span></span>
            <input type="text" name="position"  placeholder="Position" value="Position" data-required="true"/>
        </label>
        
        <label for="presentation"><span>Type of presentation<span class="required">*</span></span>
            <input type="radio" name="presentation" value="Oral"  checked="checked"/> Oral
            <input type="radio" name="presentation" value="Poster"/> Poster 
        </label><br>
        
        <label for="title"><span>Presentation Title<span class="required">*</span></span>
            <input type="text" name="title"  placeholder="Title" value="Title" data-required="true"/>
        </label>
        
        <label for="message"><span>Abstract Submission Message <span class="required">*</span></span>
            <textarea name="message"   placeholder="Message" value="Message..." data-required="true"></textarea>
        </label>

        
        <label><span>Abstract Submission</span>
            <input type="file" name="file_attach[]"  />
        </label>
        
        <label for="email"><span>Email adress<span class="required">*</span></span>
            <input type="email" name="email"  placeholder="name@domain.edu" value="name@domain.edu" data-required="true"/>
        </label>
        <label><span>Phone number<span class="required">*</span></span>
            <input type="text" name="phone1" maxlength="4" placeholder="+79"  value="+79" data-required="true"/>&mdash;
            <input type="text" name="phone2" maxlength="15" placeholder="2062463"  value="2062463" data-required="true"/>
        </label>
        
        <label for="visa"><span>Do you need visa<span class="required">*</span></span>
            <input type="radio" name="visa" value="Yes"  checked="checked"/> Yes
            <input type="radio" name="visa" value="No"/> No 
        </label><br>
        
        <label><span>Fill the form</span>
            <input type="file" name="file_attach[]"  />
        </label>
        
        <label><span>Passport scan *</span>
<!--            <input type="file" name="file_attach[]" data-required="true"/>-->
            <input type="file" name="file_attach[]" />
        </label>
        
        <!-- <b>Short introduction and demonstration courses</b><hr><br> -->
        <div class="form-style-heading2">Short introduction and demonstration courses</div>
        
        <label for="may16"><span>May 16: 30 Euros</span>
            <select name="may16">
<!--            <option value="Select the course, each worth 30 Euro">Select the course, each worth 30 Euro</option>-->
            <option value="R course (Ernst van der Maaten)">R course (Ernst van der Maaten)</option>
            <option value="Climate-growth analyses (Wolfgang Beck)">Climate-growth analyses (Wolfgang Beck)</option>
            </select>
        </label>
        
        <label for="may17"><span>May 17: 30 Euros</span>
            <select name="may17">
<!--            <option value="Select the course, each worth 30 Euro">Select the course, each worth 30 Euro</option>-->
            <option value="Methods of quantitative and functional wood anatomy (Patrick Fonti)">Methods of quantitative and functional wood anatomy (Patrick Fonti)</option>
            <option value="Process modeling of tree-ring season growth">Process modeling of tree-ring season growth</option>
            </select>
        </label>
        <div class="form-style-heading3"></div>
        <!--<label for="name"><span>Excursion to Kaliningrad and Baltic Federal University (20 Euros)<span class="required">*</span></span>
            <input type="radio" name="excursion" value="yes"  checked="checked"/> Yes
            <input type="radio" name="excursion" value="no"/> No 
        </label><br><br><br>-->
        
        <label for="excursioncheckbox"><span>Excursion (20 Euros) <span class="required">*</span></span>
            <input checked type="checkbox" name="excursioncheckbox" value="20"> Kaliningrad and Baltic Federal University
<!--            <span>Excursion to Kaliningrad and Baltic Federal University</span>-->
        </label>
        
        <label for="dinner"><span>Conference dinner (30 Euros) <span class="required">*</span></span>
            <input type="radio" name="dinner" value="Yes"  checked="checked"/> Yes
            <input type="radio" name="dinner" value="No"/> No 
        </label><br>
        
        <label for="sesions"><span>Sesions, coffee breaks, welkome party ... <span class="required">*</span></span>
            <input checked disabled type="checkbox" name="sesions" value="150">You can not refuse (150 Euros) 
<!--            <br>-->
<!--                <span>Sesions, coffee breaks, welkome party</span>-->
        </label><br><br>
        <!-- <label for="subject"><span>Regarding</span>
            <select name="subject">
            <option value="General Question">General Question</option>
            <option value="Advertise">Advertisement</option>
            <option value="Partnership">Partnership Oppertunity</option>
            </select>
        </label> -->
        
        <div class="form-style-heading2">Conference fees</div>
        <b>Cost: 260 Euros</b>
        <div class="form-style-heading3"></div>
        <label><span>&nbsp;</span>
        	<button type="submit">Submit</button>
        </label>
    </form>
</div>


<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">
var allowed_file_size = "1048576";
var allowed_files = ['image/png', 'image/gif', 'image/jpeg', 'image/pjpeg'];
var border_color = "#C2C2C2"; //initial input border color

$("#contact_body").submit(function(e){
    e.preventDefault(); //prevent default action 
	proceed = true;
	
	//simple input validation
	$($(this).find("input[data-required=true], textarea[data-required=true]")).each(function(){
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag              
            }   
	}).on("input", function(){ //change border color to original
		 $(this).css('border-color', border_color);
	});
	
	//check file size and type before upload, works in modern browsers
	if(window.File && window.FileReader && window.FileList && window.Blob){
		var total_files_size = 0;
		$(this.elements['file_attach[]'].files).each(function(i, ifile){
			if(ifile.value !== ""){ //continue only if file(s) are selected
                if(allowed_files.indexOf(ifile.type) === -1){ //check unsupported file
                    alert( ifile.name + " is unsupported file type!");
                    proceed = false;
                }
             total_files_size = total_files_size + ifile.size; //add file size to total size
			}
		}); 
       if(total_files_size > allowed_file_size){ 
            alert( "Make sure total file size is less than 1 MB!");
            proceed = false;
        }
	}
	
	//if everything's ok, continue with Ajax form submit
	if(proceed){ 
		var post_url = $(this).attr("action"); //get form action url
		var request_method = $(this).attr("method"); //get form GET/POST method
		var form_data = new FormData(this); //Creates new FormData object
		
		$.ajax({ //ajax form submit
			url : post_url,
			type: request_method,
			data : form_data,
			dataType : "json",
			contentType: false,
			cache: false,
			processData:false
		}).done(function(res){ //fetch server "json" messages when done
			if(res.type == "error"){
				$("#contact_results").html('<div class="error">'+ res.text +"</div>");
			}
			
			if(res.type == "done"){
				$("#contact_results").html('<div class="success">'+ res.text +"</div>");
			}
		});
	}
});
</script>

</body>
</html>
