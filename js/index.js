// section01 
// 영화 포스터 이미지
let imgWrap = document.querySelectorAll('.img-wrap');

// 영화 포스터 이미지에 마우스 over시 설명글 노출
for(let i=0;i<imgWrap.length;i++){
    imgWrap[i].addEventListener('mouseover',()=>{
        imgWrap[i].classList.add('on');                
    })
}
// 영화 포스터 이미지에 마우스 leave시 설명글 숨김
for(let i=0;i<imgWrap.length;i++){
    imgWrap[i].addEventListener('mouseleave',()=>{
        imgWrap[i].classList.remove('on');                
    })
}

        

// 배너 페이지표시 동그라미
let circle = document.querySelectorAll('.circle span');
    // 팝업이미지
let popImg = document.querySelectorAll('.pop-img img');
// 배너 인덱스 수 세팅
let current = 0;
let timer;

// 재생/정지 버튼
let playBtn = document.querySelector('.playBtn');
let isPlay = true;

// 팝업 보여지는 함수
function popShow(current){
    //popImg.src = `img/modal-banner${current+1}.jpg`;

    for(let i=0;i<circle.length;i++){
        circle[i].classList.remove('active');
        popImg[i].classList.remove('active');
    }
    popImg[current].classList.add('active');
    circle[current].classList.add('active');
}
// 팝업 인덱스 자동변경 함수
function popChange(){
    timer = setInterval(()=>{
        current = (current + 1) % circle.length;                
        popShow(current);
    },2000)            
}

//팝업 정지 함수
function popStop(){
    clearInterval(timer);
}

//팝업 함수호출
popShow(current);
popChange();    

playBtn.textContent = '\u23F8';

playBtn.addEventListener('click',()=>{
    if(isPlay){
        popStop();
        //재생표시
        playBtn.textContent = '\u25B6';
        playBtn.style.fontSize = '11px';
    }else{
        popChange();
        //정지표시
        playBtn.textContent = '\u23F8';
        playBtn.style.fontSize = '15px';
    }
    isPlay = !isPlay;
})

// 팝업 동그라미 눌렀을때 해당 index의 이미지 보여지게 하는 함수
for(let i=0; i<circle.length; i++){
    circle[i].addEventListener('click',()=>{
        popStop();

        for(let j=0; j<circle.length; j++){
            popImg[j].classList.remove('active');
            circle[j].classList.remove('active');
        }
        popImg[i].classList.add('active');
        circle[i].classList.add('active');
        current = i;

        popChange();
    })
}

// 팝업 x버튼
let xBtn = document.querySelector('.x-btn');
// 하루동안 안보이기 input
let oneDay = document.getElementById('oneday');
// 팝업창 전체
let popUp = document.querySelector('.pop-up');

//하루동안 보이지 않기 함수 (일단 3초만에 다시 나타나게 함)
xBtn.addEventListener('click',()=>{
    if(oneDay.checked){
        popUp.style.display = 'none';
        let timer = setTimeout(()=>{
            popUp.style.display = 'block';
        },3000);                
    }else{
        popUp.style.display = 'none';
    }
})

// 최상단 배너
let topBanner = document.querySelector('.top-banner');
// 최상단 배너 닫기버튼
let topBannerClose = document.querySelector('.top-banner-close');
// 닫기 버튼 클릭시 배너 닫힘
topBannerClose.addEventListener('click',()=>{
    topBanner.style.display = 'none';
})

//마우스 아이콘
let moveMouse = document.querySelector('.move-mouse');
let moveCurrent = 0;

let moveMouseTimer = setInterval(()=>{
    if(moveCurrent === 0){
        moveMouse.style.bottom = '95px';
        moveCurrent++;
    }else{
        moveMouse.style.bottom = '105px';
        moveCurrent = 0;
    }
},500)

//section02
//타이틀 이미지
let beneTit = document.querySelectorAll('.benefit-tit img');
// 우측 이미지
let beneImg = document.querySelectorAll('.benefit-img img');
// 페이지표시 작대기
let bar = document.querySelectorAll('.bar span');
//좌측버튼
let btnLeft = document.querySelector('.benefit-btn-left');
btnLeft.textContent = '\u276E';
//우측버튼
let btnRight = document.querySelector('.benefit-btn-right');
btnRight.textContent = '\u276F';
// 재생/정지버튼
let btnPlay = document.querySelector('.benefit-btn-play');
btnPlay.textContent = '\u23F8';
//선택된 페이지
let pageSel = document.querySelector('.page-sel');
pageSel.textContent = 1;
//전체 페이지
let pageAll = document.querySelector('.page-all');
pageAll.textContent = bar.length;
// 배너 인덱스 수 세팅
let current2 = 0;
let timer2;
let isPlay2 = true;

//혜택 배너 움직이기
function benefitShow(current2){
    for(let i=0; i<bar.length; i++){
        beneTit[i].classList.remove('active');
        beneImg[i].classList.remove('active');
        bar[i].classList.remove('active');
    }
    if(current2 == 0){
        btnLeft.classList.remove('gray');
        btnLeft.classList.add('gray');
    }else{
        btnLeft.classList.remove('gray');
    }
    if(current2 == bar.length-1){
        btnRight.classList.remove('gray');
        btnRight.classList.add('gray');
    }else{
        btnRight.classList.remove('gray');
    }
    beneTit[current2].classList.add('active');
    beneImg[current2].classList.add('active');
    bar[current2].classList.add('active');
    pageSel.textContent = current2 + 1;
}
//혜택 배너 인덱스 함수
function benefitChange(){
    timer2 = setInterval(()=>{
        current2 = (current2 + 1) % bar.length;
        benefitShow(current2);
    },3000)
}
//혜택 배너 멈춤
function benefitStop(){
    clearInterval(timer2);
    //재생표시
    btnPlay.textContent = '\u25B6';
    btnPlay.style.fontSize = '10px';
    btnPlay.style.paddingTop = '1px';
}

benefitShow(current2);
benefitChange();

// 재생/정지 버튼 누를때 동작하는 함수
btnPlay.addEventListener('click',()=>{
    if(isPlay2){
        benefitStop();
        //재생표시
        btnPlay.textContent = '\u25B6';
        btnPlay.style.fontSize = '10px';
        btnPlay.style.paddingTop = '1px';
    }else{
        benefitChange();
        //정지표시
        btnPlay.textContent = '\u23F8';
        btnPlay.style.fontSize = '13px';
    }
    isPlay2 = !isPlay2;
})

// 좌측버튼 클릭시
btnLeft.addEventListener('click',()=>{
    benefitStop();
    if(current2 == 0){
        current2 = 0;
    }else{
        current2--;
    }
    isPlay2 = false;
    benefitShow(current2);
})
// 우측버튼 클릭시
btnRight.addEventListener('click',()=>{
    benefitStop();
    if(current2 == bar.length-1){
        current2 = bar.length-1;
    }else{
        current2++;
    }
    isPlay2 = false;
    benefitShow(current2);
})


//section03 슬라이드

// 슬라이드 li
let slider = document.querySelectorAll('.slider ol li');
// 슬라이드 li 첫번째 요소
let slider01 = slider[0];
// 슬라이드 왼쪽 버튼
let sliderLeft = document.querySelector('.slider-left');
// 슬라이드 오른쪽 버튼
let sliderRight = document.querySelector('.slider-right');
// 이동할 margin
let moveMargin = 203;
// 클릭수
let clickNum = 0;

// 슬라이드 왼쪽 버튼 클릭시
sliderLeft.addEventListener('click',()=>{
    if(clickNum > 0 && clickNum < 5){
        slider[0].style.marginLeft = `-${moveMargin * (clickNum - 1)}px`;
        clickNum--;
        //console.log(clickNum);
    }
})

// 슬라이드 오른쪽 버튼 클릭시
sliderRight.addEventListener('click',()=>{
    if(clickNum < 4){
        slider[0].style.marginLeft = `-${moveMargin * (clickNum + 1)}px`;
        clickNum++;
        //console.log(clickNum);
    }
})