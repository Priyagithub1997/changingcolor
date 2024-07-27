const colors = ["green", "red", "blue", "orange", "yellow", "pink","white","purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgcolor = document.querySelector(".bgcolor");

btn.addEventListener("click", function () {
    const ran = randomnum();

    document.body.style.backgroundColor = colors[ran];

    color.textContent = colors[ran];
    color.style.color = colors[ran];
    bgcolor.style.color = colors[ran];
    btn.style.backgroundColor=colors[ran];
}
);

function randomnum() {
    return Math.floor(Math.random() * colors.length);


}