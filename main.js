
// 함수명 rain 
function rain(){
    //함수 내용
    let amount = 50;
    //body 태그 선택, let 변수에 넣기
    let body = document.querySelector('body');
    let i = 0;
    //양과 i태그를 비교하여 while  불리언 결정
        while(i < amount){
            //i태그를 생성하는데 drop 변수에 넣는다.
            //amount와 비교하여 계속 생성함
            let drop = document.createElement('i');
            //너비를 구하기 위한 작은 랜덤값 설정
            let size = Math.random() * 5;
            //비의 위치를 결정하기 위한 floor 설정, innerwidth에 따른 값설정
            let posX = Math.floor(Math.random() * window.innerWidth);
            //비를 내리는 시간을 딜레이 함.
            let delay = Math.random() * -20;
            //duration 값을 설정함.
            let duration = Math.random() *5
            //비의 너비를 생성
            drop.style.width = 0.2 + size+'px'
            //비의 위치를 결정함.
            drop.style.left = posX + 'px'
            //애니메이션 값을 설정함.
            drop.style.animationDelay = delay + 's'
            drop.style.animationDuration = 1+ duration + 's'
            //body에 i 태그를 생성함.
            body.appendChild(drop);
            //조건을 만족할때 i의 개수를 늘려나감.
            i++
        }
    
}

//함수 실행
rain();
//onresizeAPIs를 활용하여 너비가 변할 때마다 새롭게 rain()함수를 실행시킨다!
window.onresize = function(){
    console.log(window.innerWidth)
    //i태그를 모두 가져와서
    let drop = document.querySelectorAll('i');
    //생성된 i 태그만큼 모두 제거를 하고 
    for(let i = 0; i < drop.length; i++){
        drop[i].remove();
    }
    //새롭게 rain()함수를 실행한다. 
    rain();
}