$(document).ready(function(){
    /* html문서가 로딩 된 다음에 실행해 */

    /* 
        1차 메뉴 (.header .depth1 > li) 에 마우스를 오버하면
        오버한 li (this) 에 sub_over 클래스를 추가
        header에는 menu_over 클래스 추가 
        옆의 메뉴로 이동하면 이전메뉴가 아웃 처리되어야함
        모든 li에 있는 클래스를 지우고 지금 오버한 것만 
        다시 클래스를 줌...
    */
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })

    /* swiper */
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 3000,
        //     disableOnInteraction: true,
        // },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },

    });
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */
})