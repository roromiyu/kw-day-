const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
const button = document.getElementById("celebrateBtn");
const music = document.getElementById("music");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Create fireworks explosion
function createFirework(x, y) {
    for (let i = 0; i < 80; i++) {
        particles.push({
            x: x,
            y: y,
            radius: 2,
            color: ["#007a3d", "#ffffff", "#ce1126", "#000000"][Math.floor(Math.random() * 4)],
            speedX: (Math.random() - 0.5) * 6,
            speedY: (Math.random() - 0.5) * 6,
            life: 100
        });
    }
}

// Animate fireworks
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();

// Button click triggers celebration
button.addEventListener("click", () => {
    music.play();

    // Launch multiple fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFirework(
                Math.random() * canvas.width,
                Math.random() * canvas.height / 2
            );
        }, i * 400);
    }

    // Optional: Add floating confetti with 🇰🇼
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
        const shapes = ["●","▲","■","🇰🇼"];
        confetti.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
