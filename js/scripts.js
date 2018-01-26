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
    var sample = size;
    console.log(sample);
    $("#results").fadeIn();
    $("#results").append(sample + " pizza with..." + "<br>");
    // var toppings = "Cheese"
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      $("#results").append(topping + "<br>");
      console.log(topping);
    });


    // var topping = "cheese";
    // var size = "small";
    // var pizza1 = new Pizza(size, topping);


    // $("#results").append( )

    //pizza1.toppings(toppings);
  });
});
