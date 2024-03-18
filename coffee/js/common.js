/*
    파일명 : common.js
    작성자 : 문미영
    작성일 : 2024.02.28
    설  명 : 모든 페이지에서 작동되는 jqeury (header, footer에서 작동되는 jqeury)
*/

$(document).ready(function(){

   /******************************************** 
      아래로 스크롤하면 header가 숨겨짐 (transform으로)
      위로 스크롤하면 header가 나타남 (transform으로 움직임)
      이전스크롤값(10) - 현재스크롤값(100) : 아래로 스크롤 중
      이전스크롤값(100) - 현재스크롤값(10) : 위로 스크롤 중
      무조건 스크롤을 내리면 header에 fixed 클래스가 들어가야함
    **********************************************/
    let scroll_dir //방향 - 0보다 크면 위로 스크롤
    let scroll_prev //이전 스크롤값
    let scroll_curr //현재 스크롤값

    function scroll_chk(){
        scroll_prev = scroll_curr
        scroll_curr = $(window).scrollTop()
        scroll_dir = scroll_prev - scroll_curr
        console.log(scroll_dir)
        if(scroll_curr > 250){
            $('header').addClass('fixed')
            if(scroll_dir > 0){ //위로스크롤 - 나타나야함
                $('header').attr('style','transform: translate(0, 0)')
                /*transform: translate(0, -100px); */
            }else{ //아래로스크롤 - 사라져야함.
                $('header').attr('style','transform: translate(0, -100px)')
                $('header .gnb .depth1 > li').removeClass('on')
                $('header').removeClass('menu_over')
            }
        }else{
            $('header').removeClass('fixed')
            $('header').attr('style','transform: translate(0, 0)')
        }
    }
    scroll_chk()  //처음 로딩됐을때 1번 실행
    $(window).scroll(function(){ //스크롤 할때마다 1번 실행
        scroll_chk() 
    })

    /******************************************************
         메뉴에 마우스를 오버하면 header에 menu_over 클래스 추가
    ********************************************************/
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //pc버전
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //문서가 로딩되고 1번 실행
    $(window).resize(function(){
        device_chk() //문서가 리사이즈될때마다 1번씩 실행
    })

    $('header .gnb .depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $('header .gnb .depth1 > li:last-child > .depth2 > li:last-child > a').on('focusout', function(){
        if(device_status == 'pc'){
            $('header .gnb .depth1 > li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })

    /****************************************
        모바일 메뉴
        1차 메뉴 a를 클릭하면 a링크를 작동이 안되어야 하고 
        하위메뉴를 열어줘야함.
    ******************************************/
    $("header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('on')
        }
    });

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    // TOP 버튼 눌러서 상단으로 이동
    $('aside button').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    $('footer .f_nav button.f_nav_open').on('click', function(){
        $('footer .f_nav').addClass('open')
    })
    $('footer .f_nav button.f_nav_close').on('click', function(){
        $('footer .f_nav').removeClass('open')
    })

})//$(document).ready