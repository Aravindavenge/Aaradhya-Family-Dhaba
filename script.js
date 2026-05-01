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

function addCart(item, price){
    alert(item + " added to cart - ₹" + price);
}

function goMenu(){
    document.getElementById("menuSection").scrollIntoView({
        behavior:"smooth"
    });
}