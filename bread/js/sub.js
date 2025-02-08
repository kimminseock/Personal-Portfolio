document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileOverlay = document.querySelector(".mobile-overlay");

    function toggleMobileNav() {
        if (mobileNav.style.left === "0px") {
            mobileNav.style.left = "-250px"; // 메뉴 숨김
            mobileOverlay.style.display = "none"; // 오버레이 제거
        } else {
            mobileNav.style.left = "0px"; // 메뉴 표시
            mobileOverlay.style.display = "block"; // 오버레이 활성화
        }
    }

    mobileMenuIcon.addEventListener("click", toggleMobileNav);
    mobileOverlay.addEventListener("click", toggleMobileNav);

    // 페이지 로드 시 적용할 이미지 애니메이션
    const items = document.querySelectorAll('.img-item');

    const keyframes = {
        filter: ['grayscale(100%)', 'grayscale(0%)'], // 처음에는 흑백상태에서 컬러상태로 변경
    };

    items.forEach((value, i) => {
        const options = {
            duration: 5000, // 5초 동안 애니메이션 실행
            easing: 'ease', // 부드러운 애니메이션 효과
            fill: 'forwards', // 애니메이션이 끝난 후 상태 유지
            delay: i * 400, // 각 이미지마다 0.4초씩 지연
        };
        value.animate(keyframes, options);
    });

    // IntersectionObserver로 스크롤 시 애니메이션 적용
    const observerOptions = {
        root: null, // 브라우저 화면을 기준으로 감지
        rootMargin: '0px', // 여유 공간이 없이 요소가 정확히 보일 때 감지
        threshold: 0.5, // 요소가 50% 보일 때 애니메이션 실행
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const keyframes = {
                    filter: ['grayscale(100%)', 'grayscale(0%)'],
                };
                const options = {
                    duration: 5000,
                    easing: 'ease',
                    fill: 'forwards',
                };
                entry.target.animate(keyframes, options);
                observer.unobserve(entry.target); // 애니메이션 후 observer를 멈추기
            }
        });
    }, observerOptions);

    // observer에 이미지 항목 추가
    items.forEach(item => {
        observer.observe(item);
    });

    const fadeItems = document.querySelectorAll('.fade-up');

    // 화면에 나타날 때 애니메이션 적용
    const checkVisibility = () => {
        fadeItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // 요소가 화면에 들어오면 visible 클래스를 추가
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add('visible');
            }
        });
    };

    // 스크롤 시마다 checkVisibility 함수 실행
    window.addEventListener('scroll', checkVisibility);

    // 페이지 로딩 시에도 즉시 체크
    checkVisibility();
});