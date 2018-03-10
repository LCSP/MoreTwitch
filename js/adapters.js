$( "#newUser" ).hide();
$( "#oldUser" ).hide();

$('#btnNewUser').click(function(){
	//$( "#newUser" ).show();
	$( "#newUser" ).slideDown("slow");
	$( "#oldUser" ).slideUp("slow");	
});
$('#btnOldUser').click(function(){
	//$( "#oldUser" ).show();
	$( "#oldUser" ).slideDown("slow");
	$( "#newUser" ).slideUp("slow");
});


