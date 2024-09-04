/* const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

container.addEventListener('mouseover', () => {
  container.style.backgroundColor = 'blue';
});

container.addEventListener('mouseout', () => {
  container.style.backgroundColor = 'red';
});

btn.addEventListener('click', () => {
  alert('Button clicked!');
})

const buttonClickCallback = () => {
  alert('Button clicked!');
}

btn.addEventListener('click', buttonClickCallback);

setTimeout(() => {
  btn.removeEventListener('click', buttonClickCallback);
}, 2000); */

const btn = document.querySelector('button');

const buttonClick = (event) => {
  console.log(event);
}

btn.addEventListener('click', buttonClick);