window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// let time = 2000,
//     currentCardIndex = 0,
//     card = document.querySelectorAll(".people-equipe .card-equipe")
//     max = card.length;

// function nextCard() {
//     currentCardIndex++;
//     card[currentCardIndex].classList.add("selected");
// }

// function start() {
//     setInterval(() => {
//         nextCard();
//     }, time);
// }

// window.addEventListener("load", start);

