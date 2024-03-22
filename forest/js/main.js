$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['MAIN', '나무심기', '활동소개', '활동이야기'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */

        scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if((destination.index == 0) || (destination.index == 2)){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('흰색으로 바뀌어라');
                $('#fp-nav').attr('data-color', '')
                $('header').removeClass('black')
			}else{
                $('.counter').counterUp();
                //console.log('검은색으로 바뀌어라');
                $('#fp-nav').attr('data-color', 'black')
                $('header').addClass('black')
                $('.counter').counterUp();
            }
		},

		responsiveWidth: 768, /* fullpage를 적용시키지 않을 모바일 사이즈 */
        
	});

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="page' + (index + 1) + ' '+className+'"><span></span></span>';
            },
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.swiper-button-prev',  
        },

    });//swiper

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 넓이고정 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 28,
            },
        },
        
    });
    
})//document.ready