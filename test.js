document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const hiddenContent = document.getElementById("hidden-content");
  
    // Trigger the animation after 1 second
    setTimeout(() => {
      header.classList.add("shrink");
      hiddenContent.classList.add("show");
    }, 2000);
  });
