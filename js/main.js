const content = document.querySelector('.cate-list-tab-wrap');
const wing = document.querySelector('.cate-list-tab');

// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
const contentTop = content.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function(){
  if(window.scrollY >= contentTop){
    wing.classList.add('fixed');
  }else{
    wing.classList.remove('fixed');
  }
});