const bgAnimation = document.querySelector('.bgAnimation');
const images = ["section01_bg", "section02_bg", "section03_bg", "section04_bg", "section05_bg"];

const bgChange = () => { 
    const selectImg = images[Math.floor(Math.random() * images.length)];
    // images가 가지고 있는 배열 수(images.length) 만큼 난수 발생(Math.random())시켜 내림(Math.floor()) 한다
    bgAnimation.style.background = `url(/images/${selectImg}.jpeg)`;
}
bgChange(); // 맨 처음 이미지 세팅 (안하면 처음에 사진 없이 하얀 배경만 보이다가 8초 뒤에 사진이 뜸)
setInterval(bgChange, 8000)// 8초마다 bgChange() 실행