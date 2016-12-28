<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>TRACE 2017 Rgeistration Form</title>
<link href="regformstyle.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="favicon.png" />
</head>

<body>
<div class="form-style" id="contact_form">
    <div class="form-style-heading">TRACE 2017 Rgeistration Form</div>
    <div id="contact_results"></div>
    <form id="contact_body" method="post" action="contact_trace.php">
        <label for="name"><span>First name <span class="required">*</span></span>
            <input type="text" name="name" placeholder="First name" value="First name" data-required="true"/>
        </label>
        <label for="name"><span>Last name <span class="required">*</span></span>
            <input type="text" name="lastname" placeholder="Last name" value="Last name" data-required="true"/>
        </label>
        <!-- Form of addressing -->
        <label for="name"><span>Form of addressing<span class="required">*</span></span>
            <input type="radio" name="addressing" value="dr"  checked="checked"/> Dr.
            <input type="radio" name="addressing" value="prof"/> Prof. 
            <input type="radio" name="addressing" value="mr"/> Mr 
            <input type="radio" name="addressing" value="mrs"/> Mrs <br/>
           
        </label><br>
        <!-- Form of addressing -->
        <label for="name"><span>Country<span class="required">*</span></span>
            <input type="text" name="country" placeholder="Country" value="Country"  data-required="true"/>
        </label>
        <label for="name"><span>Affiliation<span class="required">*</span></span>
            <input type="text" name="affiliation"  placeholder="Affiliation" value="Affiliation" data-required="true"/>
        </label>
        <label for="name"><span>Position<span class="required">*</span></span>
            <input type="text" name="position"  placeholder="Position" value="Position" data-required="true"/>
        </label>
        
        <label for="name"><span>Type of presentation<span class="required">*</span></span>
            <input type="radio" name="presentation" value="oral"  checked="checked"/> Oral
            <input type="radio" name="presentation" value="poster"/> Poster 
        </label><br>
        
        <label for="name"><span>Presentation Title<span class="required">*</span></span>
            <input type="text" name="position"  placeholder="Title" value="Title" data-required="true"/>
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
        
        <label for="name"><span>Do you need visa<span class="required">*</span></span>
            <input type="radio" name="visa" value="oral"  checked="checked"/> Yesl
            <input type="radio" name="visa" value="poster"/> No 
        </label><br>
        
        <label><span>Fill out the form</span>
            <input type="file" name="file_attach[]"  />
        </label>
        
        <label><span>Passport scan</span>
            <input type="file" name="file_attach[]"  />
        </label>
        
        <b>Short introduction and demonstration courses</b><hr><br>
        
        <label for="may16"><span>May16 check one</span>
            <select name="may16">
            <option value="R course (Ernst van der Maaten)">R course (Ernst van der Maaten)</option>
            <option value="Climate-growth analyses (Wolfgang Beck)">Climate-growth analyses (Wolfgang Beck)</option>
            </select>
        </label>
        
        <label for="may17"><span>May 17: check one</span>
            <select name="may17">
            <option value=" Methods of quantitative and functional wood anatomy (Patrick Fonti).
"> Methods of quantitative and functional wood anatomy (Patrick Fonti).
</option>
            <option value="Process modeling of tree-ring season growth">Process modeling of tree-ring season growth</option>
            </select>
        </label>
        <br>
        <label for="subject"><span>Regarding</span>
            <select name="subject">
            <option value="General Question">General Question</option>
            <option value="Advertise">Advertisement</option>
            <option value="Partnership">Partnership Oppertunity</option>
            </select>
        </label>
        <label for="message"><span>Message <span class="required">*</span></span>
            <textarea name="message" data-required="true"></textarea>
        </label>
        <label><span>&nbsp;</span>
        	<button type="submit">Submit</button>
        </label>
    </form>
</div>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
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
