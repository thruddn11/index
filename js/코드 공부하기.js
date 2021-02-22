'use strict';

//👘👘👘👘👘👘(1)번 기능 ------- navbar 투명하게 만들기 위해 작성한 내용들!!
    const navbar =  document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;

//scroll이 될 때마다 내가 작성한 {} =블록 안의 코드가 실행되어지도록
//해달라고 설정하는 것임!!!
document.addEventListener('scroll', () => {
    
    //확인용 코드
    console.log(window.scrollY); //스크롤 숫자 확인
    console.log(`navbarHeight: ${navbarHeight}`); // ``백틱 이용해서 이름지정해서 출력해서 확인해주기!!


    //스크롤링이 navbarHeight 이상으로 스크롤링이 발생하면
    //navbar에 있는 클래스 리스트에 클래스를 추가해줄 건데
    //navbar가 이루어지면 navbar의 dark. --> BEM의 Modifier을 이용해서
    //navbar가 어두워지게 , 즉 윈도우의 스크롤링이 navbar이상으로 지나가게되면
    //진하게 색변경 해주기
    //즉 스크롤링이 클때만 navbar--dark를 추가해주는 것임
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
    //스크롤링이 작으면 navbar--dark를 없애줄 것임!
    //직접 여기까지만 작성하고 개발자도구켜서 스크롤하면 class가 달라지는것을 볼 수 있음!
});



//👘👘👘👘👘👘(2)번 기능 --- 버튼 누르면 원하는 곳으로 스크롤링 되도록 설정하기!!
//먼저 클릭을 했을 때 원하는 id 요소를 알아야 함!

//먼저 navbarMenu의 요소를 쿼리셀렉터를 이용하여 받아오기
const navbarMenu = document.querySelector('.navbar_menu');

//클릭이 되면 등록한 함수가 호출되도록 설정
navbarMenu.addEventListener('click', (evnet) => {
    console.log('dsf'); //확인용 코드

    //클릭이 되는 아이템의 이벤트에 타겟은 바로 내가 클릭한 요소가 출력이 될 것임!
    // console.log(event.target); 
    //확인용코드
    //여기까지 작성하고 html 부분에 data-link="#home" 이 코드를 
    //navbar li 태그 안에 넣어주어야함!!!
   
    //다작성하고 다시 확인용 코드 작성 - dataset 안에 data-link라고 했으므로
    // console.log(event.target.dataset.link);
    
    //다음으로 target이라는 변수를 할당하고
    const target = event.target;

    //그다음으로 link라는 변수를 target에있는 dataset에 있는 link
    const link = target.dataset.link;
    //그리고 link가 없다면 --> null이거나 undefined라면 아무것도하지 않고
    //null이 아닌 경우에만 여기서 처리를 해주는 코드를 작성
    if (link == null) {
        return;
    }


    //null이 아닐때 콘솔 확인 코드
    console.log(event.target.dataset.link);

    //link는 변수라서 ''입력 안해도된다!
    // const scrollTo = document.querySelector(link); 
    // scrollTo.scrollIntoView({behavior: 'smooth'});
    scrollIntoView(link);
});

//그리고 마지막으로 
//const target = event.target;
//const link = target.dataset.link; 이렇게정의해서 사용하는 것보다

//const link = event.target.dataset.link;로 한줄로 작성해도 되긴함!!!!!



//----------------- 추가 설명 -----------------------
//scrollIntoView는 하나는 우리가 정의해준 함수
// function scrollIntoView(selector) { //우리가 정의한 함수
//     const scrollTo = document.querySelector(selector);
//      scrollTo.scrollIntoView(....  // DOM요소의 함수
//   }

// 👘👘👘👘👘👘(3)번 기능 ---> 사진 밑에있는 contact me 버튼을 클릭하면 그부분으로 이동하도록 설정
//이부분 이해가안됌!! ---> #contact로만 해줘야하는건지?
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    // const scrollTo = document.querySelector('#contact');
    // scrollTo.scrollIntoView({behavior: 'smooth'});
    scrollIntoView('#contact');
})




//위의 코드들중에서 서로 반복되는 코드가 있으므로 따로 최적화하여 작성해보기!!
// ===> selector를 주면 그 selector에 맞는 요소를 찾은 다음에 스무스하게
//이동하는 함수를 작성!! -- 이렇게 밑의 함수까지만 작성하면 코드가 엄청 간단해짐!!!

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}




//👘👘👘👘👘👘(4)번 기능 -- 스크롤링이 되면 홈을 조금씩 투명하게 만들기!!!
//내려가면 내려갈수록 점점 투명해지도록 설정하는 기능 만들기!!
//앞에서 썼던 API 사용해서 해보기!!
const home = document.querySelector('.home_container'); //#home에서 .home_container로 변경 --html에 home 부분에 div태그도 하나 더작성했음- 전체가 투명해지게 하지않고 content들만 투명해지게 만들려고!!
const homeHeight = home.getBoundingClientRect().height;

//그다음으로 document에 이벤트를 등록해야 하는데 스크롤링 되는것을 알아야함
document.addEventListener('scroll', () => {
    // console.log(homeHeight); 
    //확인용 코드

    //homeHeight이 800이고 스크롤이 800이 되면
    //800/800은 1 -- 그래서 1-1 은 0 ==> 불투명이된다.
    //공식을 따로 작성해준것임!!
    console.log(1 - window.scrollY / homeHeight); 
    //이제 바로윗줄의 내용을 코드로 나타내기 ==>

    //home에 있는 style에 있는 opacity 값을 변경한다는 의미
    home.style.opacity = 1 - window.scrollY / homeHeight;
})




//👘👘👘👘👘👘(5)번 기능 -- 스크롤하다 내려가면 arrow up 버튼이 나타나게 해서
//내가 어디있든지 간에 저 버튼을 누르면 다시 위로 올라갈수 있도록 해주는 기능 추가하기!!!
//우선 먼저 아이콘을 추가하기!!

//Arrow-up
document.addEventListener('scroll', () => {
    //home에서반정도 내려오면보여지도록 설정!!
    //위에 있던 homeHeight의 절반 정도로 쭉 내려오면 스크롤업 버튼을
    //일단 여기서 다시 먼저 변수 선언-스크롤업 버튼 변수
    const arrowUp = document.querySelector('.arrow-up');

    //arrowUp에 있는 클래스를 추가해주는 것임 -- 이클래스를 visible이라고 작성!
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
    arrowUp.addEventListener('click', () => {
        scrollIntoView('#home');
    });
});


//👘👘👘👘 이부분 arrowUp 함수 정의 안되는 오류 질문해서 물어보기!!!

//이제 버튼 누르면올라가도록 하는 코드 작성!!
// arrowUp.addEventListener('click', () => {
//     scrollIntoView('#home');
// });

// function scrollIntoView() {
//     const arrowUp = document.querySelector('#home');
//     scrollTo.scrollIntoView({behavior: 'smooth'});
// }


//👘👘👘👘👘👘(6)번 기능 -- 프로젝트 부분 클릭하면 그갯수 만큼 나오도록 설정하기!!!
//html의 data를 이용해서 해보기!!

//html work categories 안에 있는 버튼이 클릭이되면
//버튼안에들어있는 filter 값에 따라서 그 data-type에 해당하는 것들을 만들어주면된다!!!

const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');

const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }
    // console.log(filter);

    projectContainer.classList.add('ani-out');

    //다음으로먼저 project들을 안보이게 해주기
    //project array의 아이템을 forEach 하나당 각각 번갈아가면서
    //하나씩 해주는것임
    // console.log(` -------------------------- `);
    projects.forEach((project) => {
        // console.log(project);
        console.log(project.dataset.type);

        if(filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });

    //같은의미 (1)for of === 위의 forEach랑 같은의미로 다르게만 쓴것임
    // console.log(`-----------------------`);
    // for(let project of projects) {
    //     console.log(project);
    // }


    //같은의미 (2)for 문으로 작성
    // console.log(`-----------------------`);
    // let project;
    // for(let i = 0; i < projects.length; i++) {
    //     project = projects[i];
    //     console.log(project);
    // }


    //오류를 해결하기위해 setTimeout 함수를 작성해주기!!
    //0.3초가 지나면 등록한 ani-out을 없애주기 위해 작성!
    setTimeout(() => {
        projectContainer.classList.remove('ani-out');
    }, 300);
});