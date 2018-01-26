//business side
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.toppings = function() {
  this.toppings.push(toppings);
  //console.log(pizza1.toppings);
}


// logic side
$(document).ready(function(){
  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza]:checked").val();
    var sample = size;
    console.log(sample);
    var toppings = "Cheese";
    var pizza1 = new Pizza(size, toppings);


    $("#results").show();
    $("#selections").show();
    //pizza1.toppings(toppings);
  });
});
