document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if(destino){
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// animação quando aparecer na tela

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("mostrar");
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});