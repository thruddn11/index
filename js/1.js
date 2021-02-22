'use strict';

//👘👘👘👘👘👘(1)번 기능 ------- navbar 투명하게 만들기 위해 작성한 내용들!!
    const navbar =  document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
    
});



//👘👘👘👘👘👘(2)번 기능 --- 버튼 누르면 원하는 곳으로 스크롤링 되도록 설정하기!!
//먼저 클릭을 했을 때 원하는 id 요소를 알아야 함!

const navbarMenu = document.querySelector('.navbar_menu');

navbarMenu.addEventListener('click', (evnet) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    scrollIntoView(link);
});


// 👘👘👘👘👘👘(3)번 기능 ---> 사진 밑에있는 contact me 버튼을 클릭하면 그부분으로 이동하도록 설정
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})


//👘👘👘👘👘👘(4)번 기능 -- 스크롤링이 되면 홈을 조금씩 투명하게 만들기!!!

const home = document.querySelector('.home_container'); 
const homeHeight = home.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


//👘👘👘👘👘👘(5)번 기능 -- 스크롤하다 내려가면 arrow up 버튼이 나타나게 해서
//Arrow-up
document.addEventListener('scroll', () => {
    const arrowUp = document.querySelector('.arrow-up');

    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }

    
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


// //<button class="arrow-up">
// <i class="fas fa-arrow-up"></i>
// </button>