//영화 리스트 정보
let movieList = [
    {id:1, title: '극장판 체인소 맨: 레제편', rate: 12.5, open: new Date('2025/09/24'), favor: 4321, year: 15, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-chain.jpg'},
    {id:2, title: '베이비걸', rate: 23.4, open: new Date('2025/10/24'), favor: 3453, year: 12, dolby: 0, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-baby.jpg'},
    {id:3, title: '보스', rate: 15.2, open: new Date('2025/10/17'), favor: 1235, year: 15, dolby: 0, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-boss.jpg'},
    {id:4, title: 'F1 더 무비', rate: 17.6, open: new Date('2025/09/22'), favor: 785, year: 0, dolby: 1, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-f1.jpg'},
    {id:5, title: '퍼스트 라이드', rate: 9.5, open: new Date('2024/12/06'), favor: 3273, year: 19, dolby: 1, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-first.jpg'},
    {id:6, title: '프랑켄슈타인 : 더 뮤지컬 라이브', rate: 6.2, open: new Date('2024/09/24'), favor: 980, year: 19, dolby: 1, mega: 1, film: 1, classic: 0, imgsrc: '../img/movieList/movie-franken.jpg'},
    {id:7, title: '극장판 귀멸의 칼날: 무한성편', rate: 7.4, open: new Date('2025/10/30'), favor: 1133, year: 12, dolby: 0, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-geemyul.jpg'},
    {id:8, title: '굿 보이', rate: 12.5, open: new Date('2025/12/25'), favor: 2322, year: 0, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-goodboy.jpg'},
    {id:9, title: '투모로우바이투게더 브이알 콘서트 : 하트 어택', rate: 19.1, open: new Date('2025/11/12'), favor: 315, year: 15, dolby: 0, mega: 0, film: 1, classic: 1, imgsrc: '../img/movieList/movie-heart.jpg'},
    {id:10, title: '나쁜계집애: 달려라 하니', rate: 10, open: new Date('2026/01/22'), favor: 411, year: 15, dolby: 0, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-honey.jpg'},
    {id:11, title: '세계의 주인', rate: 2.4, open: new Date('2026/03/04'), favor: 21, year: 12, dolby: 1, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-juin.jpg'},
    {id:12, title: '킹 오브 프리즘 -유어 엔드리스 콜- 모두 빛나라! 프리즘 투어즈', rate: 1.5, open: new Date('2025/10/18'), favor: 185, year: 19, dolby: 0, mega: 1, film: 0, classic: 1, imgsrc: '../img/movieList/movie-king.jpg'},
    {id:13, title: '마작', rate: 0.3, open: new Date('2025/11/02'), favor: 1670, year: 0, dolby: 1, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-majak.jpg'},
    {id:14, title: '만남의 집', rate: 0, open: new Date('2025/08/27'), favor: 10, year: 15, dolby: 1, mega: 0, film: 0, classic: 1, imgsrc: '../img/movieList/movie-mannam.jpg'},
    {id:15, title: '퍼펙트 블루', rate: 34, open: new Date('2025/07/13'), favor: 1921, year: 12, dolby: 0, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-perfect.jpg'},
    {id:16, title: '후지모토 타츠키 17-26 파트 1', rate: 21.8, open: new Date('2025/02/09'), favor: 657, year: 0, dolby: 1, mega: 0, film: 1, classic: 0, imgsrc: '../img/movieList/movie-tasuki.jpg'},
    {id:17, title: '트론: 아레스', rate: 16.7, open: new Date('2024/09/10'), favor: 789, year: 19, dolby: 0, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-tron.jpg'},
    {id:18, title: '어쩔수가없다', rate: 5.2, open: new Date('2025/02/12'), favor: 2390, year: 15, dolby: 1, mega: 1, film: 0, classic: 0, imgsrc: '../img/movieList/movie-ujjul.jpg'},
    {id:19, title: '웨폰', rate: 10.2, open: new Date('2025/11/22'), favor: 683, year: 19, dolby: 0, mega: 0, film: 0, classic: 0, imgsrc: '../img/movieList/movie-weapon.jpg'},
    {id:20, title: '좀비딸', rate: 18, open: new Date('2025/10/05'), favor: 4673, year: 12, dolby: 1, mega: 0, film: 0, classic: 0, imgsrc: '../img/movieList/movie-zombie.jpg'}
];