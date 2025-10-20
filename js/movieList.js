//영화 리스트 정보
let movieList = [
    {id:1, title: '극장판 체인소 맨: 레제편', rate: 15.2, open: new Date('2025/09/24'), review:9.5, favor: 4321, year: 15, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-chain.jpg', txt: "인기 애니메이션 '체인소 맨' 첫 공식 극장판 국내 상륙!<br>압도적 배틀 액션이 스크린에서 폭발한다!데블 헌터로 일하는 소년 ‘덴지’는 조직의 배신으로 죽음에 내몰린 순간 전기톱 악마견 ‘포치타’와의 계약으로 하나로 합쳐져 누구도 막을 수 없는 존재 ‘체인소 맨’으로 다시 태어난다.", on: 1},
    {id:2, title: '베이비걸', rate: 23.4, open: new Date('2025/10/20'), review:8.5, favor: 3453, year: 12, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-baby.jpg', txt: "누가 누구를 지배하는가 맨해튼의 호화로운 아파트, 자상한 예술가 남편과 사랑스런 두 딸, 로봇 자동화 회사의 CEO 로미(니콜 키드먼).<br>여성들의 롤모델로서 모든 것이 완벽해 보이는 삶이지만, 로미는 지배 당하고 싶은 자신의 욕망이 부끄럽다고 생각해 오랜 결혼생활에도 진정한 즐거움을 찾지 못했다.", on: 1},
    {id:3, title: '보스', rate: 15.2, open: new Date('2025/09/24'), review:7, favor: 1235, year: 15, dolby: 0, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-boss.jpg', txt: "갑작스러운 보스의 죽음! 차기 보스는 누구?! <br>보스 후보1. 차기 보스 0순위지만, 조직이 아닌 중식당 미미루로 전국구 평정을 꿈꾸는 순태(조우진)<br>보스 후보2. 조직 내 입지는 충분하나 운명처럼 만난 탱고에 인생을 건, 차기 보스 유력자 ‘강표’(정경호)<br>보스 후보3. 유일하게 보스를 갈망하지만, ", on: 1},
    {id:4, title: 'F1 더 무비', rate: 17.6, open: new Date('2025/09/24'), review:6.5, favor: 785, year: 0, dolby: 1, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-f1.jpg', txt:"최고가 되지 못한 전설 VS 최고가 되고 싶은 루키한때 주목받는 유망주였지만 끔찍한 사고로 F1®에서 우승하지 못하고 한순간에 추락한 드라이버 '소니 헤이스'(브래드 피트). 그의 오랜 동료인 '루벤 세르반테스'(하비에르 바르뎀)에게 레이싱 복귀를 제안받으며 최하위 팀인 APXGP에 합류한다.", on: 1},
    {id:5, title: '퍼스트 라이드', rate: 9.5, open: new Date('2024/12/06'), review:8.5, favor: 3273, year: 19, dolby: 1, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-first.jpg', txt:"'끝을 보는 놈, 해맑은 놈, 잘생긴 놈, 눈 뜨고 자는 놈, 사랑스러운 놈' 10월, 뭉치면 더 웃기는 놈들의 대환장 코미디가 온다! 어린 시절부터 한 몸처럼 붙어 다닌 24년 지기 사총사, 태정(강하늘), 도진(김영광), 연민(차은우), 금복(강영석)의 꿈은 바로 함께 하는 여행! 학창 시절에 이루지 못했던 꿈을 ", on: 1},
    {id:6, title: '프랑켄슈타인 : 더 뮤지컬 라이브', rate: 6.2, open: new Date('2024/09/24'), review:9, favor: 980, year: 19, dolby: 1, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-franken.jpg', txt:"'신을 믿어 지독하게. 하지만 그건 축복이 아니야, 저주를 통해서지.'<br>나폴레옹 전쟁의 참혹한 전장에서 시작된 과학자 빅터 프랑켄슈타인의 실험은 피조물을 탄생시키지만, 예기치 못한 피조물의 실종으로 파국을 맞이한다. 3년 뒤, 빅터 앞에 괴물이 되어 돌아온 피조물은 ", on: 1},
    {id:7, title: '극장판 귀멸의 칼날: 무한성편', rate: 7.4, open: new Date('2025/10/24'), review:7, favor: 1133, year: 12, dolby: 0, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-geemyul.jpg', txt:"혈귀로 변해버린 여동생 네즈코를 인간으로 되돌리기 위해 혈귀를 사냥하는 조직인 《귀살대》에 입대한 카마도 탄지로.<br>입대 후 동료인 아가츠마 젠이츠, 하시비라 이노스케와 함께 많은 혈귀와 싸우고, 성장하면서 세 사람의 우정과 유대는 깊어진다.탄지로는 《귀살대》 최고위 검사인", on: 0},
    {id:8, title: '굿 보이', rate: 15.2, open: new Date('2025/09/25'), review:8, favor: 2322, year: 0, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-goodboy.jpg', txt:"인간 친구 토드가 며칠 전부터 이상하다 여기서 토드를 지킬 수 있는 건 나 밖에 없다 우리의 세계가 무너지지 않도록 내가 나서야 한다", on: 1},
    {id:9, title: '투모로우바이투게더 브이알 콘서트 : 하트 어택', rate: 19.1, open: new Date('2025/11/12'), review:6.5, favor: 315, year: 15, dolby: 0, mega: 0, film: 0, classic: 0, imgsrc: '../img/movieList/movie-heart.jpg', txt:"골든아워로 물든 캠퍼스 광장. MOA라는 이름이 새겨진 라커의 문이 열리는 순간, 심장을 명중하는 특별한 만남이 다시 시작된다! 투모로우바이투게더와 함께하는 현실 판타지는 캠퍼스를 벗어나 발아래 구름이 흐르는 핑크빛 하늘 위로 번져가고, 멈출 수 없는 마음이 레이싱 트랙 ", on: 0},
    {id:10, title: '나쁜계집애: 달려라 하니', rate: 15.2, open: new Date('2026/01/22'), review:7.5, favor: 411, year: 15, dolby: 0, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-honey.jpg', txt:"달리기로 전국을 제패한 전국구 육상 스타 '나애리'는 전학 간 빛나리 고등학교에서 딱 한 번 진 적이 있는 전 금메달리스트 '하니'와 다시 만나게 된다. 도심 골목에서 달리는 '스트릿 런'이라는 특별한 이벤트 경기에 참여하게 된 두 사람은 떠오르는 혜성 같은 신예 '주나비'와 맞붙게 되는데…", on: 0},
    {id:11, title: '세계의 주인', rate: 2.4, open: new Date('2025/03/04'), review:8.5, favor: 21, year: 12, dolby: 1, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-juin.jpg', txt:"반장, 모범생, 학교 인싸인 동시에 연애가 가장 큰 관심사인 열여덟 ‘이주인’. 어느 날, 반 친구 ‘수호’가 제안한 서명운동에 전교생이 동참하던 중 오직 ‘주인’만이 내용에 동의할 수 없다며 나 홀로 서명을 거부한다. 어떻게든 설득하려는 ‘수호’와 단호한 ‘주인’의 실랑이가 결국 말싸움으로 번지고, ", on: 1},
    {id:12, title: '킹 오브 프리즘 -유어 엔드리스 콜- 모두 빛나라! 프리즘 투어즈', rate: 1.5, open: new Date('2025/10/18'), review:8, favor: 185, year: 19, dolby: 0, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-king.jpg', txt:"프리즘 쇼. 그것은 노래, 댄스, 프리즘 점프를 결합한 종합 엔터테인먼트 쇼! <KING OF PRISM>은 그런 프리즘 쇼에 매료된 개성 넘치는 소년들이 관객을 더욱 설레게 하는 “프리즘스타”를 목표로 성장해 가는 이야기 이번 킹프리는 “프리즘☆투어즈”!", on: 1},
    {id:13, title: '마작', rate: 0.3, open: new Date('2025/11/02'), review:4.5, favor: 1670, year: 0, dolby: 1, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-majak.jpg', txt:"급격한 경제 성장을 이루며 전 세계의 돈이 모이는 1990년대 타이베이, 네 청년 홍어, 소부처, 홍콩 그리고 룬룬은 모든 것을 함께 나눈다는 약속을 하며 청년 갱단을 조직해 한 집에서 살아간다. 남자친구와 재회하기 위해 무작정 타이베이를 찾았지만 갈 곳이 없어진 프랑스인 마르트. 갱단의 리더 홍어는 마르트를 ", on: 0},
    {id:14, title: '만남의 집', rate: 0.3, open: new Date('2025/08/27'), review:5, favor: 10, year: 15, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-mannam.jpg', txt:"15년 차 교도관 태저(송지효)는 근무 중 담당 수용자 미영(옥지영)의 모친 사망 소식을 전해 듣는다. 어느 겨울밤, 장례식장 빈소에서 예기치 못한 만남을 하게 된 태저와 미영의 딸 준영(도영서). 짧은 만남은 두 사람의 삶에 따스한 균열을 일으키고, 결국 세 인물의 연결고리를 만들어낸다.", on: 1},
    {id:15, title: '퍼펙트 블루', rate: 34, open: new Date('2025/07/13'), review:6, favor: 1921, year: 12, dolby: 0, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-perfect.jpg', txt:"한때 전 국민의 사랑을 받던 아이돌 그룹 ‘챰’의 미마, 빛나는 무대를 뒤로하고 배우라는 낯선 세계로 새로운 도전을 한다. 대사 한 마디뿐인 작은 배역에도 최선을 다하지만, ‘배신자’라는 냉혹한 메시지들, 폭탄이 든 협박 편지.. 그녀를 집요하게 괴롭힌다.드라마 ‘더블 바인드’에서 점차 중요한 역할을 맡으", on: 1},
    {id:16, title: '후지모토 타츠키 17-26 파트 1', rate: 5.8, open: new Date('2025/02/09'), review:7, favor: 657, year: 0, dolby: 1, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-tasuki.jpg', txt:"<룩백>, <극장판 체인소 맨: 레제편> 을 탄생시킨 후지모토 타츠키가 17 세부터 26 세까지 그린 8개의 단편 인류가 멸망한 세상에서 살아남은 두 사람을 그린 <뒤뜰에는 두 마리 닭이 있었다> 사춘기의 충동이 터지는 <사사키군이 총알을 막았어> 우주적인 규모로 폭발하는 SF 로맨틱 코미디", on: 1},
    {id:17, title: '트론: 아레스', rate: 16.7, open: new Date('2024/09/10'), review:8, favor: 789, year: 19, dolby: 0, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-tron.jpg', txt:"차원이 다른 비주얼 액션 블록버스터! 현실과 가상의 경계를 허무는 ‘트론’의 세계가 열린다. 가상 세계에서 창조된 존재를 현실 세계로 끌어올 수 있는 시대. 그곳에서 탄생한 AI 최종 병기 아레스는 초인적인 힘과 속도, 고도 지능으로 설계되어 무한히 재생될 수 있지만 기술의 한계로 현실 세계에 단 29분만", on: 1},
    {id:18, title: '어쩔수가없다', rate: 25.2, open: new Date('2025/02/12'), review:9.5, favor: 2390, year: 15, dolby: 1, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-ujjul.jpg', txt:"‘다 이루었다’는 생각이 들 만큼 삶에 만족하던 25년 경력의 제지 전문가 ‘만수’(이병헌). 아내 ‘미리’(손예진), 두 아이, 반려견들과 함께 행복한 일상을 보내던 만수는 회사로부터 돌연 해고 통보를 받는다. “미안합니다. 어쩔 수가 없습니다.” 목이 잘려 나가는 듯한 충격에 괴로워하던 만수는,", on: 1},
    {id:19, title: '웨폰', rate: 10.2, open: new Date('2025/11/22'), review:9, favor: 683, year: 19, dolby: 0, mega: 0, film: 0, classic: 0, imgsrc: '../img/movieList/movie-weapon.jpg', txt:"평범한 수요일, 어느 마을 학교의 같은 반 학생 17명이 등교하지 않는다. 그날 새벽 2시 17분, 잠에서 깬 아이들이 어둠 속으로 달려가 돌아오지 않았기 때문이다. 유일하게 남은 아이는 입을 다물고, 사라진 아이들을 찾으려는 이들은 악몽 같은 현실을 마주하게 되는데…", on: 0},
    {id:20, title: '좀비딸', rate: 18, open: new Date('2025/10/05'), review:5.5, favor: 4673, year: 12, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-zombie.jpg', txt:"나의 딸은 좀비다. 이 세상 마지막 남은 유일한 좀비 댄스 열정을 불태우는 사춘기 딸 ‘수아’와 함께 티격태격 일상을 보내는 맹수 전문 사육사 ‘정환’.어느 날 전 세계를 강타한 좀비 바이러스에 감염된 딸 '수아'를 지키기 위해 '정환'은 어머니 '밤순'이 사는 바닷가 마을 '은봉리'로 ‘수아’와 함께 향한다.", on: 1},
    {id:21, title: '사람과 고기', rate: 17.1, open: new Date('2025/10/07'), review:9.6, favor: 107, year: 12, dolby: 0, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-saram.jpg', txt:"돈 있어야 먹을 수 있고 혼자 먹기엔 서러운 음식, 고기. 폐지를 주우며 외롭게 살고 있는 형준(박근형)은 우연히 만난 비슷한 처지의 우식(장용), 화진(예수정)과 ‘공짜’로 고기를 먹으러 다니게 된다. 혼자가 아닌 셋이 고기를 먹기 위해 뭉치는 순간, 노인 3인방은 마침내 살아있음을 느끼고 세상과 연결되는 즐거움을 만끽하게 된다.", on: 1},
    {id:22, title: '비긴 어게인', rate: 13.4, open: new Date('2026/09/18'), review:9.2, favor: 1407, year: 15, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-begin.jpg', txt:"다시 시작해, 너를 빛나게 할 노래를! 싱어송라이터인 ‘그레타’(키이라 나이틀리)는 남자친구 ‘데이브’(애덤 리바인)가 메이저 음반회사와 계약을 하게 되면서 뉴욕으로 오게 된다. 그러나 행복도 잠시, 오랜 연인이자 음악적 파트너로서 함께 노래를 만들고 부르는 것이 좋았던 그레타와 달리 스타가 된 데이브의 마음은 어느새 변해버린다.스타 음반 프로듀서였지만 이제는 해고된", on: 0},
    {id:23, title: '2019 방탄소년단 월드 투어 ‘러브 유어셀프 : 스피크 유어셀프’ 런던 리마스터링(BTS MOVIE WEEKS)', rate: 11.7, open: new Date('2025/09/10'), review:8.7, favor: 614, year: 0, dolby: 0, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-bts.jpg', txt:"수만 개의 별빛 아래에서 진정한 사랑과 존재의 가치를 노래한 순간 <2019 BTS WORLD TOUR ‘LOVE YOURSELF: SPEAK YOURSELF’ LONDON> 초대형 LED와 환상적인 연출이 어우러져 감성과 에너지가 교차하는 무대 한국 가수 최초로 영국 웸블리 스타디움 단독 공연을 펼친 날,전 세계에 울린", on: 1},
    {id:24, title: '얼굴', rate: 18.5, open: new Date('2025/09/11'), review:8.6, favor: 900, year: 15, dolby: 0, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-face.jpg', txt:"“이 분이 저희 어머니라고요?” 태어나서 아무것도 볼 수 없었던 시각장애인임에도 불구하고 세상에서 가장 아름다운 도장을 만드는 장인으로 거듭난 ‘임영규’와 그의 아들 ‘임동환’에게 경찰에게서 한 통의 전화가 걸려온다. 40년 전 실종된 아내이자 어머니 ‘정영희’의 백골 사체가 발견되었다는 것. 얼굴조차 몰랐던 어머니가 살해됐을 가능성도 있다는 이야기를 듣게 된 ‘임동환’은 아버", on: 1},
    {id:25, title: '워킹맨', rate: 11.4, open: new Date('2025/09/12'), review:8, favor: 374, year: 19, dolby: 1, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-walking.jpg', txt:"영국 왕립 해병대의 전설적인 특수요원 ‘레본’은 전역 후 건설 현장 반장으로 평범한 일상을 보낸다. 그러던 어느 날, 상사의 딸 ‘제니’가 부패 경찰, 정부 고위직, 러시아 마피아까지 연루된 거대 인신매매 조직으로부터 납치를 당한다. 가족과 다름없는 상사의 부탁을 외면할 수 없었던 ‘레본’은 숨겨 온 본모습을 드러내며 피의 응징을 준비하는데… ", on: 1},
    {id:26, title: '도쿄 리벤저스2: 결전', rate: 10, open: new Date('2025/11/05'), review:8, favor: 210, year: 15, dolby: 0, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-tokyo.jpg', txt:"점멸등이 일렁이는 근미래의 도쿄. 음악에 빠진 고등학생 ‘유타’와 ‘코우’는 친구들과 함께 자유로운 나날을 보낸다. 동아리방을 찾아 늦은 밤 학교에 잠입한 그들은 교장 ‘나가이’의 고급 차량에 발칙한 장난을 치고, 분노한 학교는 AI 감시 체제를 도입한다. 그날 이후 그들을 둘러싼 모든 것이 조금씩 달라지기 시작하는데…", on: 0},
    {id:27, title: '도그빌', rate: 0.2, open: new Date('2024/03/15'), review:6, favor: 34, year: 19, dolby: 1, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-dog.jpg', txt:"록키 산맥에 자리잡은 평온한 작은 마을 '도그빌'. 어느 날, 갱단의 추격을 피하고 있는 비밀스러운 여자 '그레이스'가 마을로 숨어 들어온다. 그녀에게 첫 눈에 반한 마을의 철학자 '톰'의 배려로 고단한 방랑에 지쳤던 '그레이스'는 마을에서 점차 안정을 취하게 된다. 그러던 어느 날, 마을로 갑자기 경찰들이 닥쳐오자 마을 사람들은 점점", on: 1},
    {id:28, title: '미러 넘버 3', rate: 21.6, open: new Date('2025/10/19'), review:8, favor: 3456, year: 15, dolby: 1, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-mirror.jpg', txt:"남자친구와 내키지 않는 시골 여행을 가게 된 라우라(파울라 베어).들판을 가르며 달리던 차는 갑작스러운 사고로 전복되고 그녀만 홀로 기적처럼 살아남는다. 사고 현장을 목격한 중년 여인 베티(바르바라 아우어)는 라우라를 자신의 집으로 데려가 따뜻하게 보살피고, 이를 본 남편과 아들은 당혹한 기색을 감추지 못하는데… 숨겨진 가족의 균열이 서서히 정체를", on: 1}
];

// 영화 리스트 정보를 저장할 배열
let movieList02 = [];
//영화목록 출력할곳
let movieListOl = document.querySelector('.movie-list ol');
//출력할 html
let result = ``;
//오늘날짜 저장
const today= new Date();
//더보기 버튼
let moreBtn = document.querySelector('.more');
moreBtn.innerHTML = '더보기 <span>\u276E</span>';
moreBtn.style.display = 'none';
//더보기 갯수
let morelength = 12;





function movieShow(movieList02){
    result = ``;
    
    if(movieList02.length > morelength){
        for(let i=0; i<morelength; i++){
            result += `<li>`;

            if(movieList02[i].mega === 1){
                result += `<img src='../img/movieList/megaonly.png' alt='#' class='megaonly'>`;
            }
            result += `<p class='number'>${i+1}</p>
            <div class='img-wrap'>
                <img src='${movieList02[i].imgsrc}' alt='#'>
                <div class='img-txt'>
                    <p class='desc'>${movieList02[i].txt}</p>`;
                    //개봉했을때만 관람평점 삽입
                    if(movieList02[i].open <= today){
                        result += `<div class='score'>
                                        <span class='mov_tit'>관람평</span>
                                        <span class='mov_score'>${movieList02[i].review}</span>
                                    </div>`;
                    }
            result += `
                </div>
            </div>
            <div class='list-info'>
                <p class='movie-title'>
            `;
            if(movieList02[i].year === 0){
                result += `<img src='../img/movieList/allyear.png' alt='#'>`;
            }else{
                result += `<img src='../img/movieList/${movieList02[i].year}year.png' alt='#'>`;
            }
            result += `<span>${movieList02[i].title}</span>
                </p>
                <p class='movie-info'>
                    <span class='rate'>예매율 <span class='rateNum'>${movieList02[i].rate}</span>%</span>
                    <span class='line'>|</span>
                    <span class='date'>개봉일 
                        <span class='dateNum'>${movieList02[i].open.getFullYear()}.${movieList02[i].open.getMonth()+1}.${movieList02[i].open.getDate()}</span>
                    </span>
                </p>
            </div>
            <div class='list-btn'>
                <button type='button'>
                    <i class='fa-regular fa-heart'></i>`;
                //좋아요수 1000개 이상은 k로 간추려서 표시
                if(movieList02[i].favor >= 1000){
                    result += `${(movieList02[i].favor / 1000).toFixed(1)}k`;
                }else{
                    result += `${movieList02[i].favor}`;
                }
            result += `</button>`;

            if(movieList02[i].dolby === 1 && movieList02[i].on === 1){
                result += `<div class='dolby'>
                    <a href='#none'>예매</a>
                    <a href='#none'><img src='../img/movieList/dolby.png' alt='#'></a>
                </div>`;
            }else if(movieList02[i].on === 0){
                result += `<div class='off'>개봉예정</div>`;
            }else{
                result += `<div class='ticket'>
                    <a href='#none'>예매</a>
                </div>`;
            }    
            result += `</div>
            </li>`;
            
        }
        moreBtn.style.display = 'block';
    }else{
        for(let i=0; i<movieList02.length; i++){
            result += `<li>`;

            if(movieList02[i].mega === 1){
                result += `<img src='../img/movieList/megaonly.png' alt='#' class='megaonly'>`;
            }
            result += `<p class='number'>${i+1}</p>
            <div class='img-wrap'>
                <img src='${movieList02[i].imgsrc}' alt='#'>
                <div class='img-txt'>
                    <p class='desc'>${movieList02[i].txt}</p>`;
                    //개봉했을때만 관람평점 삽입
                    if(movieList02[i].open <= today){
                        result += `<div class='score'>
                                        <span class='mov_tit'>관람평</span>
                                        <span class='mov_score'>${movieList02[i].review}</span>
                                    </div>`;
                    }
            result += `
                </div>
            </div>
            <div class='list-info'>
                <p class='movie-title'>
            `;
            if(movieList02[i].year === 0){
                result += `<img src='../img/movieList/allyear.png' alt='#'>`;
            }else{
                result += `<img src='../img/movieList/${movieList02[i].year}year.png' alt='#'>`;
            }
            result += `<span>${movieList02[i].title}</span>
                </p>
                <p class='movie-info'>
                    <span class='rate'>예매율 <span class='rateNum'>${movieList02[i].rate}</span>%</span>
                    <span class='line'>|</span>
                    <span class='date'>개봉일 
                        <span class='dateNum'>${movieList02[i].open.getFullYear()}.${movieList02[i].open.getMonth()+1}.${movieList02[i].open.getDate()}</span>
                    </span>
                </p>
            </div>
            <div class='list-btn'>
                <button type='button'>
                    <i class='fa-regular fa-heart'></i>`;
                //좋아요수 1000개 이상은 k로 간추려서 표시
                if(movieList02[i].favor >= 1000){
                    result += `${(movieList02[i].favor / 1000).toFixed(1)}k`;
                }else{
                    result += `${movieList02[i].favor}`;
                }
            result += `</button>`;

            if(movieList02[i].dolby === 1 && movieList02[i].on === 1){
                result += `<div class='dolby'>
                    <a href='#none'>예매</a>
                    <a href='#none'><img src='../img/movieList/dolby.png' alt='#'></a>
                </div>`;
            }else if(movieList02[i].on === 0){
                result += `<div class='off'>개봉예정</div>`;
            }else{
                result += `<div class='ticket'>
                    <a href='#none'>예매</a>
                </div>`;
            }    
            result += `</div>
            </li>`;
            
        }
        moreBtn.style.display = 'none';
    }

    movieListOl.innerHTML = result;
    
    moreBtn.addEventListener('click',()=>{
        if(morelength<movieList02.length){
            morelength += 12;
        }else{
            morelength = movieList02.length;
        }
        movieShow(movieList02);
        imgWrapShow();
    })
    
}



 
// 최상단 메뉴(카테고리)
let menuLi = document.querySelectorAll('.top-menu ul li');


//영화리스트 정보에서 예매율을 추출하여 재배열후, 내림차순으로 정렬
//이렇게 앞에[...]을 붙이면 원본배열은 그대로 유지시킨채 배열을 저장한다고함.
movieList02 = [...movieList].sort((a,b)=>{
    //예매율이 같을때는,
    if(b.rate === a.rate){
        //개봉일을 비교하여
        //new Date()객체는 == 비교시에만 Number로 변환해야 먹힘. 안그러면 안먹힘. >, <, - 등은 변환하지 않아도 잘됨.
        if(Number(a.open) == Number(b.open)){
            //개봉일도 같으면 ㄱㄴㄷ 순으로정렬
            return a.title.localeCompare(b.title, 'ko');
        }else{
            //개봉일이 먼저인 순으로정렬
            return a.open - b.open;                    
        }
    }else{
        //예매율이 높은것부터 내림차순 정렬
        return b.rate - a.rate;
    }
});
morelength = 12;
movieShow(movieList02);


function imgWrapShow(){
    // 영화 포스터 이미지
    let imgWrap = document.querySelectorAll('.img-wrap');

    // 영화 포스터 이미지에 마우스 over시 설명글 노출
    for(let i=0; i<imgWrap.length; i++){
        imgWrap[i].addEventListener('mouseover',()=>{
            imgWrap[i].classList.add('on');                
        })
    }
    // 영화 포스터 이미지에 마우스 leave시 설명글 숨김
    for(let i=0; i<imgWrap.length; i++){
        imgWrap[i].addEventListener('mouseleave',()=>{
            imgWrap[i].classList.remove('on');                
        })
    }
}
imgWrapShow();

let filter01 = document.querySelector('.filter01');
filter01.style.display = 'block';

let filter02 = document.querySelector('.filter02');
filter02.style.display = 'none';

for(let i=0; i<menuLi.length; i++){
    // 최상단 메뉴(카테고리) 클릭했을때
    menuLi[i].addEventListener('click',()=>{

        for(let j=0; j<menuLi.length; j++){
            menuLi[j].classList.remove('active');
            menuLi[j].style.borderRight = '1px solid #ccc';
        }

        menuLi[i].classList.add('active');
        menuLi[i].style.borderRight = '1px solid #503396';
        if(i!=0){
            menuLi[i].previousElementSibling.style.borderRight = '1px solid #503396';
        }

        //박스오피스 메뉴를 클릭했을때
        if(menuLi[i].classList.contains('movie-box')){

            movieList02 = [];

            //영화리스트 정보에서 예매율을 추출하여 재배열후, 내림차순으로 정렬
            movieList02 = [...movieList].sort((a,b)=>{
                //예매율이 같을때는,
                if(b.rate === a.rate){
                    //개봉일을 비교하여
                    if(Number(a.open) == Number(b.open)){
                        //개봉일도 같으면 ㄱㄴㄷ 순으로정렬
                        return a.title.localeCompare(b.title, 'ko');
                    }else{
                        //개봉일이 먼저인 순으로정렬
                        return a.open - b.open;                    
                    }
                }else{
                    //예매율이 높은것부터 내림차순 정렬
                    return b.rate - a.rate;
                }
            });

            morelength = 12;
            movieShow(movieList02);
            filter01.style.display = 'block';
            filter02.style.display = 'none';
            btnOn.classList.remove('active');
            btnFilter01();
            imgWrapShow();

        //상영예정작 메뉴를 클릭했을때
        }else if(menuLi[i].classList.contains('movie-coming')){
            
            movieList02 = [];

            //오늘날짜보다 개봉일이 뒤에 있는 영화리스트만 따로 배열저장
            for(let i=0; i<movieList.length; i++){
                if(movieList[i].open > today){
                    movieList02[movieList02.length] = movieList[i];
                }
            }
            
            movieList02.sort((a,b)=>{                
                //개봉일을 비교하여
                //개봉일이 같으면
                if(Number(a.open) == Number(b.open)){
                    // 예매율을 비교하여
                    if(b.rate === a.rate){
                        //예매율도 같으면 ㄱㄴㄷ 순으로정렬
                        return a.title.localeCompare(b.title, 'ko');
                    }else{
                        //예매율 순으로 내림차순 정렬
                        return b.rate - a.rate;                        
                    }
                }else{
                    //개봉일이 가까운것부터 오름차순 정렬
                    return a.open - b.open;
                }
                
            });
            
            morelength = 12;
            movieShow(movieList02);
            filter01.style.display = 'none';
            filter02.style.display = 'block';
            for(let j=0;j<btnClick02.length; j++){
                btnClick02[j].classList.remove('active');
            }
            btnClick02[0].classList.add('active');
            btnFilter02();
            imgWrapShow();

        //MEGA ONLY 메뉴를 클릭했을때
        }else if(menuLi[i].classList.contains('movie-mega')){

            movieList02 = [];

            //메가온리(movieList[i].mega값이 1인 배열)만 따로 저장
            for(let i=0; i<movieList.length; i++){
                if(movieList[i].mega === 1){
                    movieList02[movieList02.length] = movieList[i];
                }
            }

            //영화리스트에서 예매율을 비교하여
            movieList02.sort((a,b)=>{
                //예매율이 같을때는,
                if(b.rate === a.rate){
                    //개봉일을 비교하여
                    if(Number(a.open) == Number(b.open)){
                        //개봉일도 같으면 ㄱㄴㄷ 순으로정렬
                        return a.title.localeCompare(b.title, 'ko');
                    }else{
                        //개봉일이 먼저인 순으로정렬
                        return a.open - b.open;                    
                    }
                }else{
                    //예매율이 높은것부터 내림차순 정렬
                    return b.rate - a.rate;
                }
            });

            morelength = 12;
            movieShow(movieList02);
            filter01.style.display = 'block';
            filter02.style.display = 'none';
            btnOn.classList.remove('active');
            btnFilter01();
            imgWrapShow();

        //필름소사이어티 메뉴를 클릭했을때
        }else if(menuLi[i].classList.contains('movie-film')){

            movieList02 = [];

            //필름소사이어티(movieList[i].film값이 1인 배열)만 따로 저장
            for(let i=0; i<movieList.length; i++){
                if(movieList[i].film === 1){
                    movieList02[movieList02.length] = movieList[i];
                }
            }

            //영화리스트에서 예매율을 비교하여
            movieList02.sort((a,b)=>{
                //예매율이 같을때는,
                if(b.rate === a.rate){
                    //개봉일을 비교하여
                    if(Number(a.open) == Number(b.open)){
                        //개봉일도 같으면 ㄱㄴㄷ 순으로정렬
                        return a.title.localeCompare(b.title, 'ko');
                    }else{
                        //개봉일이 먼저인 순으로정렬
                        return a.open - b.open;                    
                    }
                }else{
                    //예매율이 높은것부터 내림차순 정렬
                    return b.rate - a.rate;
                }
            });

            morelength = 12;
            movieShow(movieList02);
            filter01.style.display = 'block';
            filter02.style.display = 'none';
            btnOn.classList.remove('active');
            btnFilter01();
            imgWrapShow();

        //클래식소사이어티 메뉴를 클릭했을때
        }else{

            movieList02 = [];

            //클래식소사이어티(movieList[i].classic값이 1인 배열)만 따로 저장
            for(let i=0; i<movieList.length; i++){
                if(movieList[i].classic === 1){
                    movieList02[movieList02.length] = movieList[i];
                }
            }

            //영화리스트에서 예매율을 비교하여
            movieList02.sort((a,b)=>{
                //예매율이 같을때는,
                if(b.rate === a.rate){
                    //개봉일을 비교하여
                    if(Number(a.open) == Number(b.open)){
                        //개봉일도 같으면 ㄱㄴㄷ 순으로정렬
                        return a.title.localeCompare(b.title, 'ko');
                    }else{
                        //개봉일이 먼저인 순으로정렬
                        return a.open - b.open;                    
                    }
                }else{
                    //예매율이 높은것부터 내림차순 정렬
                    return b.rate - a.rate;
                }
            });

            morelength = 12;
            movieShow(movieList02);
            filter01.style.display = 'block';
            filter02.style.display = 'none';
            btnOn.classList.remove('active');
            btnFilter01();
            imgWrapShow();

        }

    })
}



let btnClick01 = document.querySelector('.filter01>a');
let btnOn = document.querySelector('.btn-on');
let searchNum01 = document.querySelector('.search-num01');
searchNum01.textContent = movieList02.length;

// 필터값 적용한 배열을 따로 저장
let movieList03 = [];

btnClick01.addEventListener('click',()=>{
    btnOn.classList.toggle('active');
    morelength = 12;
    btnFilter01();
    imgWrapShow();
});

//개봉작만 필터 실행 함수
function btnFilter01(){  
    //버튼 켜있으면 개봉작만 노출
    if(btnOn.classList.contains('active')){

        movieList03 = [];

        //개봉(movieList[i].on 값이 1인 배열)만 따로 저장
        for(let i=0; i<movieList02.length; i++){
            if(movieList02[i].on === 1){
                movieList03[movieList03.length] = movieList02[i];
            }
        }
        morelength = 12;
        movieShow(movieList03);
        searchNum01.textContent = movieList03.length;
    }else{ //버튼 꺼져있으면 개봉예정인것까지 모두 노출
        morelength = 12;
        movieShow(movieList02);
        searchNum01.textContent = movieList02.length;
    }
}

let btnClick02 = document.querySelectorAll('.filter02 .filter-btn a');
let openDate = document.querySelector('.opendate');
let searchNum02 = document.querySelector('.search-num02');


for(let i=0;i<btnClick02.length; i++){
    btnClick02[i].addEventListener('click',()=>{ 
        for(let j=0;j<btnClick02.length; j++){
            btnClick02[j].classList.remove('active');
        }
        btnClick02[i].classList.add('active');
        morelength = 12;
        btnFilter02();
        imgWrapShow();    
    });
}

function btnFilter02(){
    //개봉일순 켜있으면 개봉일순으로 노출
    if(openDate.classList.contains('active')){       
        movieList02.sort((a,b)=>{                
            //개봉일을 비교하여
            //개봉일이 같으면
            if(Number(a.open) == Number(b.open)){
                // 예매율을 비교하여
                if(b.rate === a.rate){
                    //예매율도 같으면 ㄱㄴㄷ 순으로정렬
                    return a.title.localeCompare(b.title, 'ko');
                }else{
                    //예매율 순으로 내림차순 정렬
                    return b.rate - a.rate;                        
                }
            }else{
                //개봉일이 가까운것부터 오름차순 정렬
                return a.open - b.open;
            } 
        });
    }else{
        movieList02.sort((a,b)=>{
            return a.title.localeCompare(b.title, 'ko');
        });
    }
    morelength = 12;
    movieShow(movieList02);
    searchNum02.textContent = movieList02.length;
}






