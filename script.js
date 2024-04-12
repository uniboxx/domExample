const input = document.getElementById('input');
const liElements = document.querySelectorAll('li');

function createElement(type) {
  const value = input.value;
  console.log(value);
  const output = document.getElementById('generated-elements');
  const element = document.createElement('h' + type);
  element.textContent = value;
  output.appendChild(element);
}
// liElements.forEach((el, idx) => {
//   el.addEventListener('click', ev => {
//     createElement(idx + 1);
//   });
// });
