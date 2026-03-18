document.addEventListener("DOMContentLoaded", () => {
    // Manually define your frames
    const frames = [
        "/Projects/frames/frame1.png",
        "/Projects/frames/frame2.png",
        "/Projects/frames/frame3.png",
        "/Projects/frames/frame4.png",
        "/Projects/frames/frame5.png"
    ];

    // Get all project cards
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        const frame = card.querySelector(".frame");
        if (!frame) return;

        // Pick random frame
        const randomFrame = frames[Math.floor(Math.random() * frames.length)];

        // Apply it
        frame.style.backgroundImage = `url('${randomFrame}')`;
    });
});