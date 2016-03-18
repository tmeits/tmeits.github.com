<?php

define('EMAIL_FOR_REPORTS', 'ilynva@gmail.com');
define('RECAPTCHA_PRIVATE_KEY', '@privatekey@');
define('FINISH_URI', 'http://woodanatomy2016.sfu-kras.ru/');
define('FINISH_ACTION', 'redirect');
define('FINISH_MESSAGE', 'Thanks for filling out my form!');
define('UPLOAD_ALLOWED_FILE_TYPES', 'doc, docx, xls, csv, txt, rtf, html, zip, jpg, jpeg, png, gif');

define('_DIR_', str_replace('\\', '/', dirname(__FILE__)) . '/');
require_once _DIR_ . '/handler.php';

?>

<?php if (frmd_message()): ?>
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-biz-red.css" type="text/css" />
<span class="alert alert-success"><?php echo FINISH_MESSAGE; ?></span>
<?php else: ?>
<!-- Start Formoid form-->
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-biz-red.css" type="text/css" />
<script type="text/javascript" src="<?php echo dirname($form_path); ?>/jquery.min.js"></script>
<form class="formoid-biz-red" style="background-color:#1A2223;font-size:13px;font-family:'Open Sans','Helvetica Neue', 'Helvetica', Arial, Verdana, sans-serif;color:#ECECEC;max-width:640px;min-width:150px" method="post"><div class="title"><h2>PLANT ECOLOGY AND DIGITAL WOOD ANATOMY AT SHUSHENSKY BOR NATIONAL PARK</h2></div>
	<div class="element-input<?php frmd_add_class("input"); ?>" title="Your answer"><label class="title"><span class="required">*</span></label><input class="large" type="text" name="input" required="required" placeholder="E-mail"/></div>
	<div class="element-name<?php frmd_add_class("name"); ?>" title="Your answer"><label class="title"><span class="required">*</span></label><span class="nameFirst"><input placeholder="Name First" type="text" size="8" name="name[first]" required="required"/></span><span class="nameLast"><input placeholder="Name Last" type="text" size="14" name="name[last]" required="required"/></span></div>
	<div class="element-radio<?php frmd_add_class("radio"); ?>" title="Your answer"><label class="title">Form of addressing<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio" value="Mr" required="required"/><span>Mr</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio" value="Mrs" required="required"/><span>Mrs</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-input<?php frmd_add_class("input1"); ?>" title="Your answer"><label class="title"><span class="required">*</span></label><input class="large" type="text" name="input1" required="required" placeholder="Country"/></div>
	<div class="element-input<?php frmd_add_class("input2"); ?>" title="Your answer"><label class="title"><span class="required">*</span></label><input class="large" type="text" name="input2" required="required" placeholder="Affiliation"/></div>
	<div class="element-input<?php frmd_add_class("input3"); ?>" title="Your answer"><label class="title"><span class="required">*</span></label><input class="large" type="text" name="input3" required="required" placeholder="Position"/></div>
	<div class="element-name<?php frmd_add_class("name1"); ?>"><label class="title"></label><span class="nameFirst"><input placeholder="Name First" type="text" size="8" name="name1[first]" /></span><span class="nameLast"><input placeholder="Name Last" type="text" size="14" name="name1[last]" /></span></div>
	<div class="element-textarea<?php frmd_add_class("textarea"); ?>" title="Research interests (up to 30 words)"><label class="title"><span class="required">*</span></label><textarea class="medium" name="textarea" cols="20" rows="5" required="required" placeholder="Research interests (up to 30 words)"></textarea></div>
<div class="submit"><input type="submit" value="Submit"/></div></form><script type="text/javascript" src="<?php echo dirname($form_path); ?>/formoid-biz-red.js"></script>

<!-- Stop Formoid form-->
<?php endif; ?>

<?php frmd_end_form(); ?>