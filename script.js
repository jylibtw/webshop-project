document.addEventListener("DOMContentLoaded", () => {
    const clickSound = document.getElementById("btn-sound");

    if(!clickSound)     
        return;

    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
});