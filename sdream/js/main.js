$(document).ready(function(){
    //html문서가 로딩되면 단 1번 실행

    /* 스크롤시 header 스타일 변경 */
    let scrolling //스크롤 된 값    
    function scroll_chk(){ //함수의 선언 
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
        if(scrolling > 0){ //스크를 된 값이 0보다 크다면 - fixed 클래스 추가
            $('.header').addClass('fixed')
        }else{//0이거나 0보다 작거나 - fixed 클래스 삭제
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //함수의 호출
    $(window).scroll(function(){
        //브라우저가 스크롤 될때마다 1번만 실행
        scroll_chk()
    })//$(window).scroll

    /* pc버전시 메뉴에 오버하면 header 스타일 변경 */
    let window_w //브라우저의 넓이
    let device_status //모바일모드인지 pc모드인지 구분
    let mobile_size = 640
    function device_chk(){
        window_w = $(window).width() //브라우저 넓이 저장
        if(window_w > mobile_size){ //pc버전
            device_status = 'pc'
        }else{ //640부터 그 이하
            device_status = 'mobile'
        }
        console.log(device_status)
    }//function device_chk
    device_chk() //함수 호출
    $(window).resize(function(){
        device_chk() //함수 호출
    })

    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){ //pc일때만 실행
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    /* 메뉴 바로 뒤에는 로그인 버튼이 있음
       로그인 버튼에 포커스가 되면 메뉴의 오버상태를 해제 */
    $('.header .tnb .login').on('focusin', function(){
        $('.header').removeClass('menu_over')
    })

    /* 모바일 메뉴 열기/닫기 */
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })

    /*
        <li>                         -- sub_open 클래스 추가
            <a href="#n">1차메뉴</a>  --  .header .gnb ul.depth1 > li > a
            <ul class="depth2">
            </ul>
        </li> 
        1차메뉴 a를 클릭하면 감싸는 li에 클래스를 추가
        a는 href 이동값을 가지고 있음... 이게 모바일에서 클릭되면 XXXX 
    */
    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('sub_open')
        }
    });

    /* top버튼을 클릭하면 상단으로 자동 스크롤 */
    $('.footer .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })


    //팝업
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    });

})//$(document).ready