
//Check off specific Todos by clicking
$("ul").on("click","li",function(){

$(this).toggleClass("completed");



});


//Click on x to delete todo 
$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})

	event.stopPropagation();

});


$("input[type='text']").keypress(function(event){

	if(event.which===13)
	{
		var todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todotext+"</li>");
	}




});


$("#special").click(function(){
	$("input[type='text']").fadeToggle();
})
