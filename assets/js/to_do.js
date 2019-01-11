//Check off to-do by clicking (without a class)
/*$("li").click(function(){
	//if the color is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black 
		$(this).css({
			color: "black",
			textDecoration : "none" 
	});
	} else {
		// turn it gray
		$(this).css({
			color: "rgb(128, 128, 128)",
			textDecoration : "line-through" 
	});
	
	}

});
*/

//check off/check in items (with class)

$("#itemList").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete item

$("#itemList").on("click", "span", function(event){
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing the text typed in the imput und stor it in a var
		var todoText = $(this).val();
		$(this).val(""); 
		//create a new item in the list (new li in the ul)
		$("ul").append('<li><span class="listItem"><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>' );
	}

});

$("#addItem").click(function(){
	$("input[type='text'").fadeToggle(200);
});