/*
    파일명 : main.js
    작성자 : 문미영
    작성일 : 2024.02.28
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },
    });
    
    $('.visual .btn_ctrl button.stop').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl button.play').show()
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual .btn_ctrl button.play').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl button.stop').show()
        visual_swiper.autoplay.start();  /* 재생 기능 */
    })

    /**************************************************
        .biz .list ul li에 마우스를 올리면
        마우스를 오버한 li에는 on클래스가 추가
        나머지 li에는 off 클래스 추가
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

    $('.biz .list ul li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').addClass('off')
            $(this).removeClass('off')
            $(this).addClass('on')
        }
    })
    $('.biz .list ul').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').removeClass('off')
        }
    })

    /*************************************************** 
        news의 팝업
    ***************************************************/
    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            501: {    /* 500px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1025: {    /* 1025px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 28,
            },
        },
    });

})//$(document).ready

