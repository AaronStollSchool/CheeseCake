// Aaron Stoll stoll23@up.edu



function isVegan() {		// Called on order button press
    let topSelect = false;
    let orderedText = "Thank you! Your order has been placed.";	// create string for post order text
    orderedText = orderedText.concat( "<br />", String($("#QuantityTopping").val()), " Topping(s) of: <br />" );
    if ( $("#Plain").is(':checked') ) {					// Populate string with toppings selected
        orderedText = orderedText.concat( "Plain", "<br />" );
        topSelect = true;
    } 
    if ( $("#Cherry").is(':checked') ) {
        orderedText = orderedText.concat( "Cherry", "<br />" );
        topSelect = true;
    } 
    if ( $("#Chocolate").is(':checked') ) {
        orderedText = orderedText.concat( "Chocolate", "<br />" );
        topSelect = true;
    } 
    if ( topSelect == false ) {
        orderedText = orderedText.concat( "No Selection", "<br />" );
    }
    orderedText = orderedText.concat("Notes: ", $("#NotesBox").val(), "<br />");	// Add user written notes to order text


    if ( $("#NotesBox").val().indexOf("vegan") != -1) {			// Search for "vegan" in notes
        alert("Warning: Cheesecake contains dairy and is NOT vegan.");	// If found alert user
    } else {								// Otherwise hide order inputs and display order text
        $("#TopText").html(orderedText);
        $("#QuantityTopping").hide();
        $("#Plain").hide();
        $("#Cherry").hide();
        $("#Chocolate").hide();
        $("#NotesBox").hide();
        $("#OrderButton").hide();
        $("label").hide();
    }
    
}

$(document).ready(function(){
    $(".dropdown-content").click(function(){		// listener for anythingin class dropdown-content will catch a click on any month
        $(".dropbtn").html( event.target.id );		// sets button text to click element id
        $.post("/orders",event.target.id,function(response){
            const obj = JSON.parse(response);       // convert JSON obj back into array of objects

            $("#orderList").empty();                // clear current list

            obj.forEach(function(item) {            // loop though array adding new list items
                var orderItem = "<li>" + item.quantity + "  " + item.topping + "</li>";

                $('#orderList').append(orderItem);
            });
        });
    });s
});