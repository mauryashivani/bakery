// cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('.close-cart');

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
 
// remove item from cart
function removeCartItem(event){
	var buttonClicked = event.target;
	buttonClicked.parrentElement.remove();
}

// update total
function updatetotal(){
	var cartContent = document.getElementsByClassName('cart-content')[0]
	var cartBox = cartContent.getElementsByClassName
} 