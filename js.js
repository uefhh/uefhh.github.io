// 点击红心时，显示文本const heart = document.querySelector('.heart');
const text = document.querySelector('.text');
 
heart.addEventListener('click', function() {
  text.style.opacity = 1;
});
