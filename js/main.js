document.addEventListener("DOMContentLoaded", function () {
    slide();
});

function slide() {
    let nextBtn = document.querySelector('.next'); // 다음 버튼 요소
    let prevBtn = document.querySelector('.prev'); // 이전 버튼 요소

    let slider = document.querySelector('.slider'); // 슬라이드 전체 요소.
    let sliderList = slider.querySelector('.slider .list'); // 슬라이드 항목들이 담긴 리스트 요소

    let thumbnail = document.querySelector('.thumbnail'); // 하단의 작은 네모 썸네일의 전체 요소
    let thumbnailItems = thumbnail.querySelectorAll('.item'); // 썸네일의 안에 있는 모든 요소

    thumbnail.appendChild(thumbnailItems[0]); // 첫번째(인덱스 0번째) 썸네일을 thumbnail 요소 끝에 추가

    // 다음 버튼 클릭
    nextBtn.addEventListener('click', function () {
        moveSlider('next'); // next 버튼 클릭 시 moveSlider 함수와 매개변수 next 호출
    });

    // 이전 버튼 클릭
    prevBtn.addEventListener('click', function () {
        moveSlider('prev'); // prev 버튼 클릭 시 moveSlider 함수와 매개변수 prev 호출
    });

    // 썸네일 클릭 이벤트 추가
    thumbnailItems.forEach(function (item) {
        item.addEventListener('click', function () {
            moveSlider('next'); // 썸네일 클릭 시 moveSlider 함수 호출
        });
    });

    function moveSlider(direction) {
        let sliderItems = sliderList.querySelectorAll('.item'); // slider에 있는 모든 item 요소를 가져옴
        let thumbnailItems = document.querySelectorAll('.thumbnail .item'); // 썸네일에 있는 모든 item 요소를 가져옴
        if (direction === 'next') { // 매개변수 direction이 'next'이라면
            sliderList.appendChild(sliderItems[0]); // sliderItems[0](슬라이드 첫번째 요소)를 sliderList의 끝에 추가
            thumbnail.appendChild(thumbnailItems[0]); // thumbnailItems[0](썸네일의 첫번째 요소)를 thumbnail의 끝에 추가
            slider.classList.add('next'); // slider에 next 클래스를 추가(css 애니메이션 적용을 위해 추가)
        } else { // 매개변수 direction이 'prev'이라면
            sliderList.prepend(sliderItems[sliderItems.length - 1]); // sliderItems[sliderItems.length - 1](슬라이더의 마지막 항목)을 sliderList의 맨 앞에 추가
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]); // thumbnailItems[thumbnailItems.length - 1](썸네일의 마지막 항목)을 thumbnail의 맨 앞에 추가
            slider.classList.add('prev'); // slider에 prev 클래스 추가(css 애니메이션 적용을 위해 추가)
        }

        slider.addEventListener(
            'animationend',
            function () { // 슬라이더에 애니메이션이 끝났을 때
                if (direction === 'next') { // 매개변수 direction이 'next'이라면
                    slider.classList.remove('next'); // slider에 next 클래스를 제거
                } else {
                    slider.classList.remove('prev'); // slider에 prev 클래스 제거
                }
            },
            { once: true } // 이벤트 리스너가 한번 실행되고 나면 자동으로 제거되도록 설정하는 옵션
        );
    }
}
