//business side
function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.toppings = function() {
  this.toppings.push(topping);
  //console.log(pizza1.toppings);
}


// logic side
$(document).ready(function(){


  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza]:checked").val();
    // var sample = size;
    var topping = $("#toppings").val();
    console.log(size);
    console.log(topping);
    $("#results").fadeIn();
    $("#results").append(size + " pizza with..." + "<br>");
    $("#results").append(topping + "<br>");



    // var topping = "cheese";
    // var size = "small";
    // var pizza1 = new Pizza(size, topping);
    // $("#results").append( )
    //pizza1.toppings(toppings);

  });
});
