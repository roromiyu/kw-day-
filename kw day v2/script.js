const button = document.getElementById("celebrateBtn");
const fireworkSound = document.getElementById("fireworkSound");

button.addEventListener("click", () => {

    // Play sound
    fireworkSound.currentTime = 0;
    fireworkSound.play();

    // Create confetti
    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";

        const colors = ["#007a3d", "#ffffff", "#ce1126", "#000000"];
        confetti.style.color = colors[Math.floor(Math.random() * colors.length)];

        const shapes = ["●", "■", "▲", "🇰🇼"];
        confetti.innerText = shapes[Math.floor(Math.random() * shapes.length)];

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
});
