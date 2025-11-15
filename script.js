  const btn = document.getElementById("btn-menu");
  const menu = document.querySelector(".nav-links");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
  });

  document.querySelectorAll(".animar").forEach(el => observer.observe(el));
