const portfolio = document.querySelector("#portfolio");

portfolio.addEventListener("mouseover", (e) => {
  if(event.target.tagName == "IMG") {
    alert("hello");
    const projectDesc = event.target.firstElementChild;
    projectDesc.classList.remove("invisible");
    projectDesc.classList.add("visible");
  }
});

/*portfolio.addEventListener("mouseout", (e) => {
  if(event.target.classList.contains("card-img")) {
    const projectDesc = event.target.parentNode.parentNode.nextElementSibling;
    projectDesc.classList.remove("visible");
    projectDesc.classList.add("invisible");
  }
});*/
