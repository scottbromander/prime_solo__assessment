$(document).ready(function(){
	$(".btn").on("click", function(){
var i = 0
		$("#ourList").append("<div class='row' id='row1'><div class='floatCell'> Line " + i + " <button class='removeButton'>Remove</div><button class='changeButton'></div>");i++;
// the counter is not working and I cannot figure out why as well as the color in the div not the button
	});
	$("#ourList").on("click",".changeButton", function(){
    $(this).css("background", "red");
})


	$("#ourList").on("click",".removeButton", function(){
		$(this).parent().parent().slideUp("slow", function(){
			$(this).remove();
		});
	});	
}); 




