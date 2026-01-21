const body = document.querySelector('body');
const changeBgColor = document.createElement('input');
changeBgColor.type = "color";
changeBgColor.classList.add('input');
const button = document.createElement('button');
button.classList.add('button');
button.textContent = "Change";

body.append(changeBgColor, button);


button.addEventListener('click', ()=> {
  handleDynamicBackgroundColor();
})

function handleDynamicBackgroundColor () {
  let bgColor = changeBgColor.value;
  body.style.cssText = `background-color: ${bgColor}`;
}