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

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");

  if (!banner) 
    return;

  const consent = localStorage.getItem("cookieConsent");

  if (consent) {
    banner.classList.add("hidden");
    return;
  }

  document.getElementById("cookie-accept")?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.classList.add("hidden");
  });

  document.getElementById("cookie-decline")?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    banner.classList.add("hidden");
  });

  document.getElementById("cookie-settings")?.addEventListener("click", () => {
    alert("Einstellungen sind Mocked");
  });
});