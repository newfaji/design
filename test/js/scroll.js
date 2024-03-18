$(document).ready(function(){
    let sec02_obj_top //sec02 오브젝트의 위에서부터 떨어진값
    let sec03_obj_top
    let sec04_obj_top
    let sec05_obj_top
    let sec05_offset //sec05의 이동값
    let scrolling //현재 브라우저가 스크롤 된 값
    let window_h //브라우저의 높이
    let offset = 200 //콘텐츠가 하단에서부터 offset값만큼 올라오면 애니메이션 주기
    let class_name = 'active' //애니메이션 명

    function scroll_chk(){
        sec02_obj_top = $('.sec02 .photo').offset().top
        sec03_obj_top = $('.sec03').offset().top
        sec04_obj_top = $('.sec04').offset().top
        sec05_obj_top = $('.sec05').offset().top
        scrolling = $(window).scrollTop()
        window_h = $(window).height()
        console.log(sec02_obj_top + ', ' + scrolling + ', ' + window_h + ', ' + (sec02_obj_top - scrolling - window_h))
        if((sec02_obj_top - scrolling - window_h) < -offset){
            $('.sec02 .photo').addClass(class_name)
            if((500 - (sec02_obj_top - scrolling - window_h + offset)*1.4) <= $(window).width()){
                $('.sec02 .photo').width(500 - (sec02_obj_top - scrolling - window_h + offset)*1.4)               
            }
        }else{
            $('.sec02 .photo').removeClass(class_name)
            $('.sec02 .photo').width(500)
        }
        if((sec03_obj_top - scrolling - window_h) < -offset){
            $('.sec03').addClass(class_name)
        }else{
            $('.sec03').removeClass(class_name)
        }
        if((sec04_obj_top - scrolling - window_h) < -offset){
            $('body').addClass('black')
        }else{
            $('body').removeClass('black')
        }
        if((sec05_obj_top - scrolling - window_h) < -offset){
            sec05_offset = (sec05_obj_top - scrolling - window_h + offset)*0.2
            $('.sec05 .tit').attr('style', 'transform: translate(0, '+ sec05_offset +'px);')
        }else{
            $('.sec05 .tit').attr('style', 'transform: translate(0, 0);')
        }
    }
    scroll_chk() //문서가 로딩되었을때 1번실행
    $(window).resize(function(){
        scroll_chk() //브라우저의 사이즈가 변경되었을때마다 1번 실행
    })
    $(window).scroll(function(){
        scroll_chk() //브라우저를 스크롤 할때마다 1번 실행
    })

})//document.ready