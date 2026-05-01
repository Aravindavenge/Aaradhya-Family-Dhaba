let food = document.getElementById("food");

document.getElementById("food1").onclick = () => {
    food.style.backgroundImage = "url('./food1.png')";
}

document.getElementById("food2").onclick = () => {
    food.style.backgroundImage = "url('./food2.png')";
}

document.getElementById("food3").onclick = () => {
    food.style.backgroundImage = "url('./food3.png')";
}

document.getElementById("food4").onclick = () => {
    food.style.backgroundImage = "url('./food.png')";
}

let cart = [];
let total = 0;

function addCart(item, price){
    cart.push({item, price});
    total += price;
    updateCart();
    alert(item + " added to cart");
}

function updateCart(){
    document.getElementById("cartCount").innerText = cart.length;

    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach((product)=>{
        cartItems.innerHTML += `<p>${product.item} - ₹${product.price}</p>`;
    });

    document.getElementById("totalPrice").innerText = "Total: ₹" + total;
}

function openCart(){
    document.getElementById("cartPanel").style.right = "0";
}

function closeCart(){
    document.getElementById("cartPanel").style.right = "-400px";
}

function goMenu(){
    document.querySelector(".menu-section").scrollIntoView({
        behavior:"smooth"
    });
}