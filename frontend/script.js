
  const aboutBtn = document.getElementById("about-btn");
  const aboutDialog = document.getElementById("about-contain");
  const aboutClose = aboutDialog.querySelector(".about-close");

  aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutDialog.showModal();
  });

  aboutClose.addEventListener("click", () => aboutDialog.close());

  // klik area gelap di luar popup untuk menutup
  aboutDialog.addEventListener("click", (e) => {
    if (e.target === aboutDialog) aboutDialog.close();
  });
