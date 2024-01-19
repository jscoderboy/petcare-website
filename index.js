const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu');
function navToggle(){
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
}
btn.addEventListener('click', navToggle);



// carousel
const list = document.querySelector("#list");
const listContent = Array.from(list.children);

listContent.forEach(item => {
	const duplicatedItem = item.cloneNode(true);
	duplicatedItem.setAttribute("aria-hidden",true);
	list.appendChild(duplicatedItem);
});


