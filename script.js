const body = document.querySelector('body');
function createGrid(perRow) {
for (let i = 0; i < perRow * perRow; i++) {
  let div = document.createElement("div");
  div.setAttribute("id", `div${i}`)
  body.appendChild(div)
  div.style.opacity = 1;
  div.style.width = (88 / perRow) + 'vh';
  div.style.height = (88 / perRow) + 'vh';
  div.addEventListener('mouseover', function (element) {
    if (this.style.backgroundColor != 'black') {
    this.style.backgroundColor = 'black';
    this.style.opacity = 0.6;
    }
  });
  div.addEventListener('click', function (element) {
    if ( this.style.opacity == 1.0 ){
      this.style.backgroundColor = 'white';
    } else {
    this.style.opacity = 1.0;
    }
  });
}
}
document.querySelector('button').onclick = function () {
  let perRow = parseInt(prompt('Enter the squares per row that you would like'));
  if (perRow > 7) { perRow = 100; alert('The max is 7 x 7');}
  const childrenArray = Array.from(body.children);
  childrenArray.forEach((child) => {
    if (child.tagName == 'DIV') {
      body.removeChild(child);
    }
  });
  createGrid(perRow);
}
createGrid(4)
