
function slide() {
   const imageCnt = $('.sliderList li').length; // 이미지 개수
   let cnt = 0; // 현재 이동시점을 저장

   // clearInterval 적용을 위해 함수로 저장
   const moveSlider = function () {
      cnt++;

      // 1. 이미지 이동
      // 첫번째, 두번째, 이미지는 정상이동, 세번째의 경우 처음으로 돌아감
      if(cnt % imageCnt){
         $('.sliderList').stop().animate({left: '-=100%'}); // 정상이동
      } else {
         $('.sliderList').stop().animate({left: '0'}); // 맨처음으로 이동
      }

      // 2. 네비게이터
      $('.btnList span').removeClass('on').eq(cnt % imageCnt).addClass('on');

      console.log(cnt);
   };

   let timer = setInterval(moveSlider, 3 * 1000);

   // 네비게이터 이벤트
   $('.btnList span').on('click', function () {

      // 1. 슬라이드 시간 초기화
      clearInterval(timer);
      timer = setInterval(moveSlider, 3 * 1000);

      // 2. 버튼에 해당하는 이미지로 이동
      cnt = $(this).index(); // 해당 요소의 인덱스값을 저장
      // cnt 경우의 수
      // 0 -> 0
      // 1 -> -100
      // 2 -> -200
      $('.sliderList').stop().animate({left: (cnt * 100 * -1) + '%'});

      // 3. 네비게이터 라이팅
      $('.btnList span').removeClass('on');
      $(this).addClass('on')
   });
}
function clickState() {
   $(".twenty, .thirty, .mine, .education, .economy, .novel, .fantasy, .world, .money, .health, .love, .travel, .history").hide();
}

function click() {
   // 카테고리 클릭 이벤트
   $("#category div span").click(function () {
      // 모든 카테고리에서 'on' 클래스 제거
      $("#category div span").removeClass("on");

      // 클릭한 카테고리에 'on' 클래스 추가
      $(this).addClass("on");

      // 모든 컨텐츠 영역 숨기기
      $(".total, .twenty, .thirty, .mine, .education, .economy, .novel, .fantasy").hide();

      // 클릭한 카테고리의 텍스트 가져오기
      let selectedCategory = $(this).text().trim();

      // 선택된 카테고리에 맞는 컨텐츠를 보여줌
      if (selectedCategory === "종합") {
         $(".total").show();
         $(".total .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      } else if (selectedCategory === "20대") {
         $(".twenty").show();
         $(".twenty .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);;
      } else if(selectedCategory === "30대"){
         $(".thirty").show();
         $(".thirty .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      }else if(selectedCategory === "자기계발"){
         $(".mine").show();
         $(".mine .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      }else if(selectedCategory === "인문/교양"){
         $(".education").show();
         $(".education .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      }else if(selectedCategory === "경제/경영"){
         $(".economy").show();
         $(".economy .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      }else if(selectedCategory === "소설"){
         $(".novel").show();
         $(".novel .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      }else if(selectedCategory === "판타지/무협"){
         $(".fantasy").show();
         $(".fantasy .swiper-slide").removeClass('aos-animate').attr('data-aos', 'fade-up');
         setTimeout(function () {
            AOS.refreshHard(); // AOS 상태 갱신
         }, 1000);
      }
   });
}
function click2() {
   // 카테고리 클릭 이벤트
   $("#famous div span").click(function () {
      // 모든 카테고리에서 'on' 클래스 제거
      $("#famous div span").removeClass("on");

      // 클릭한 카테고리에 'on' 클래스 추가
      $(this).addClass("on");

      // 모든 컨텐츠 영역 숨기기
      $(".cook, .world, .money, .health, .love, .travel, .history").hide();

      // 클릭한 카테고리의 텍스트 가져오기
      let selectedCategory2 = $(this).text().trim();

      // 선택된 카테고리에 맞는 컨텐츠를 보여줌
      if (selectedCategory2 === "요리") {
         $(".cook").show();
         // $(".total .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      } else if (selectedCategory2 === "세계사") {
         $(".world").show();
         // $(".twenty .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      } else if(selectedCategory2 === "제테크"){
         $(".money").show();
         // $(".thirty .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      }else if(selectedCategory2 === "건강"){
         $(".health").show();
         // $(".mine .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      }else if(selectedCategory2 === "연애"){
         $(".love").show();
         // $(".education .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      }else if(selectedCategory2 === "여행"){
         $(".travel").show();
         // $(".economy .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      }else if(selectedCategory2 === "한국사"){
         $(".history").show();
         // $(".novel .swiper-slide").removeClass('aos-animate').attr('data-aos', 'zoom-in');
         // setTimeout(function () {
         //    AOS.refreshHard(); // AOS 상태 갱신
         // }, 1000);
      }
   });
}
function bgChange() { // gsap 스크롤 색상변경
   gsap.registerPlugin(ScrollTrigger);

   // 박스 색상 변경 애니메이션
   gsap.to(".bg", {
      scrollTrigger: {
         trigger: ".bg",
         start: "top 80%",
         end: "top 30%",
         scrub: true, // 스크롤에 따라 부드럽게 애니메이션
         toggleActions: "play none none reverse",
         markers: false // 개발 시 확인용 마커
      },
      backgroundColor: "#CBE4C9", // 변경될 색상
      color: "#000", // 텍스트 색상도 변경
      borderRadius: "24px",
      duration: 1
   });
}
function tiping() { // 타이핑 효과
   const content = "디자인에 대한 기초부터 시작해서, \n 고수의 길까지 가는과정" +
       " \n 실무에서도 쓰이는 고급 기술 \n 아주 쉽게 배울 수 있는 책"; // 변수에 문자열 저장
   const text = document.querySelector(".text"); // text 클래스를 가진 요소를 선택하여 text에 저장
   let i = 0; // 타이핑 문자 초기화

   function typing(){
      let txt = content[i++]; // content의 문자열을 인덱스 i값 +1 씩 증가
      text.innerHTML += txt=== "\n" ? "<br/>": txt; // txt가 \n이라면 줄바꿈, 아니라면 txt 실행
      if (i > content.length) { // i가 content 길이보다 크다면
         text.textContent = ""; // 텍스트 초기화
         i = 0; // 인덱스값 초기화
      }
   }
   setInterval(typing, 200) // 0.2마다 실행
}

function swiper(){
   const swiper = new Swiper(".mySwiper", {
      // autoplay: {
      //    delay: 1000,
      // },
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: { // 브레이크 포인트로 화면에 보이는 개수 수정
         640: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         768: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
         1024: {
            slidesPerView: 5,
            spaceBetween: 50,
         },
      },
   });
}
function swiper1(){
   const swiper1 = new Swiper(".container", {
      autoplay: {
         delay: 1000,
      },
      effect: 'coverflow', // coverflow 효과 적용
      grabCursor: true,    // 마우스 커서가 손 모양으로 변경
      centeredSlides: true, // 슬라이드를 중앙에 배치
      slidesPerView: 1, // 자동으로 슬라이드 크기 조정
      coverflowEffect: {
         rotate: 50, // 슬라이드 회전 각도
         stretch: 0, // 슬라이드 사이의 간격 조정
         depth: 100, // 슬라이드 깊이 설정
         modifier: 1, // 효과 강도 조정
         slideShadows: true, // 슬라이드 그림자 표시
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      breakpoints: { // 브레이크 포인트로 화면에 보이는 개수 수정
         640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
         },
         768: {
            slidesPerView: 4,
            spaceBetween: 40,
            centeredSlides: false,
         },
         1024: {
            slidesPerView: 5,
            spaceBetween: 50,
         },
      },
   });
}
function swiper2(){
   const swiper2 = new Swiper(".second", {
      autoplay: {
         delay: 1000,
      },
      slidesPerView: 1,
      effect: 'cards', // cube 효과 적용
      grabCursor: true, // 마우스 커서가 손 모양으로 변경
      centeredSlides: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true, // 페이지네이션 클릭 가능하게 설정
      },
      breakpoints: { // 브레이크 포인트로 화면에 보이는 개수 수정
         640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
         },
         768: {
            slidesPerView: 4,
            spaceBetween: 40,
            centeredSlides: false,
         },
         1024: {
            slidesPerView: 5,
            spaceBetween: 50,
         },
      },
   });
}
$(function () {
   AOS.init({
      duration: 1500,
   });

   // $('.total').hide();

});
document.addEventListener("DOMContentLoaded", function () {
   slide();
   clickState();
   click();
   bgChange();
   tiping();
   swiper();
   swiper1();
   swiper2();
   click2();
});

