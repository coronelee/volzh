const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


window.onscroll = function(){
    let header = document.querySelector('.contentSite__header')
    let header_top = document.querySelector('.contentSite__header_top')
    let warning = document.querySelector('.warning') 
    let h = window.pageYOffset;
    if(h > 200){
        header.classList.add('contentSite__header-fixed')
        header_top.style.display = 'none'
        warning.style.display = 'none'
    }
    else{
        header.classList.remove('contentSite__header-fixed')
        header_top.style.display = 'flex'
        warning.style.display = 'flex'
    }
}

