const input = document.getElementById('input');
const liElements = document.querySelectorAll('li');

function createElement(type) {
  const text = `H${type}: ${input.value}`;
  const output = document.getElementById('generated-elements');
  const element = document.createElement('h' + type);
  element.textContent = text;
  output.appendChild(element);
}
liElements.forEach((el, idx) => {
  el.addEventListener('click', ev => {
    createElement(idx + 1);
  });
});
