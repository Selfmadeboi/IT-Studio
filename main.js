let links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = link.getAttribute("href");
      if (id !== "#") {
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
        
    });
  }
