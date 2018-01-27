//business side
function Pizza (size, topping, finalCost) {
  this.size = size;
  this.topping = topping;
  this.finalCost = 0;
}

Pizza.prototype.price = function() {
  if (this.size === "Small") {
    this.finalCost = 10;
    console.log(this.finalCost);
  } else if (this.size === "Medium") {
    this.finalCost = 12;
    console.log(this.finalCost);
  } else {
    this.finalCost = 14;
    console.log(this.finalCost);
  }
};


// logic side
$(document).ready(function(){

  $("#order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=pizza]:checked").val();
    // var sample = size;
    var topping = $("#toppings").val();
    var pizza1 = new Pizza(size, topping);
    console.log(size);
    console.log(topping);
    $("#results").fadeIn();
    $("#results").append(size + " pizza with..." + "<br>");
    $("#results").append(topping + "<br>");
    $("#results").append("Final price " + pizza1.finalCost);

  });
});
