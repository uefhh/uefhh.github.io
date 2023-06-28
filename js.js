// 点击红心时，显示文本const heart = document.querySelector('.heart');
const text = document.querySelector('.text');
 
heart.addEventListener('click', function() {
  text.style.opacity = 1;
});

var fileButton = document.getElementById('fileButton');
fileButton.addEventListener('click', function() {
  window.location.href = '1.html';
});



var myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  console.log(1)
  window.location.href = 'https://b23.tv/Zn3Do37';
});
