// cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};


closeCart.onclick = () => {
  cart.classList.remove("active");
};


// cart working

if(document.readyState == "loading") {
	document.addEventListener("DOMContentLoader",ready);

} else{
	ready();
}

// making function
function ready(){
	// remove items from cart

	var removeCartButtons = document.getElementsByClassName('cart-remove')
	console.log(removeCartButtons)
	for(var i = 0; i < removeCartButtons.length; i++){
		var button = removeCartButtons[i];
		button.addEventListener("click",removeCartItem);
	}
}

// quantity changes

// var quantityInputs = document.getElementsByClassName('cart-quantity')
// for (var i = 0; i < quantityInputs.length; i++){
// 	var input = quantityInputs[i]
// 	input.addEventListener("changed",quantityChanged);

// }
 
// remove item from cart
// function removeCartItem(event){
// 	var buttonClicked = event.target;
// 	buttonClicked.parentElement.remove();
// 	updatetotal();
//  }

// quantity change
// function quantityChanged(event){
// 	var input = event.target
// 	if (isNaN(input.value)) || input.value <= 0{
// 		input.value = 1
// 	}
// 	updatetotal();
// }



// update total
// function updatetotal(){
// 	var cartContent = document.getElementsByClassName('cart-content')[0];
// 	var cartBox = cartContent.getElementsByClassName('cart-box');
// 	var total = 0;
// 	for (var i=0; i < cartBoxes.length; i++){
// 		var cartBox = cartBoxes[i];
// 		var priceElement = cartBox.getElementsByClassName('cart-price')[0];
// 		var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
// 		var price = parseFloat(priceElement.innerText.replace("$",""));
// 		var quantity = quantityElement.value;
// 		total = total + (price * quantity);

		

// 		total = Math.round(total*100)/100;
// 		document.getElementsByClassName('total-price')[0].innerText = '$' + total;


// 	}

// } 