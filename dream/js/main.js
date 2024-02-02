$(document).ready(function(){
    console.log('안녕하세요')
    /* 브라우저를 스크롤했을때
       맨위면 header에 fixed라는 클래스를 삭제
       조금이라도 아래로 스크롤된 상태라면
       header에 fixed라는 클래스를 줌

       1. 브라우저가 스크롤 된 정도를 표시한 값 
          $(window).scrollTop()
       2. 만약 스크롤 값이 0이라면 
          header에 fixed라는 클래스를 삭제
          만약 스크롤 값이 0보다 크다면 
          header에 fixed라는 클래스를 줌
     */
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop();
        //console.log(scrolling);
        
        /* 조건문 - scrolling값이 0보다 크면 */
        if(scrolling > 0){
            //console.log('0보다크다');
            $(".header").addClass("fixed");
        }else{ //0일때 - 맨 위에 있을때
            //console.log('0이다');
            $(".header").removeClass("fixed");
        }
    });//$(window).scroll
});//$(document).ready