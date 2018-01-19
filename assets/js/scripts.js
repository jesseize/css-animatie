const items = document.querySelectorAll(".item");
const btn = document.querySelector(".menu-btn");

const hasClass = (element, cls) => {
    return (' ' + element.className + ' ').indexOf(cls) > -1;
}

btn.addEventListener('click',() => {
  if(!hasClass(items[0],"opened")) {
    btn.innerHTML = '<i class="fa fa-times fa-2x" aria-hidden="true"></i>';
    for (let i = 0; i < items.length; i++) {
      items[i].classList.toggle("opened");
    }
  } else {
    btn.innerHTML = '<i class="fa fa-bars fa-2x" aria-hidden="true"></i>';
    for (let i = 0; i < items.length; i++) {
      items[i].classList.toggle("opened");
    }
  }
});
