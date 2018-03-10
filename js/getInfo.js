var content;
$.ajax({
	url: 'https://www.twitch.tv/yellowpaco',
	dataType: 'json',
	type: 'GET',
	success: function(data){
		content = $(data).find("youtube.com").html();
		alert(content);
	},
	error: function(){
		alert("No Funciono");
	}
});

