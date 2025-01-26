<!-- Chart code -->
document.addEventListener('DOMContentLoaded', function () {
    am5.ready(function() {
        let root = am5.Root.new('chartDiv');

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        // Create series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        // Set custom color set
        series.set("colors", am5.ColorSet.new(root, {
            colors: [
                am5.color("#FF45E6"), // 20대 여성
                am5.color("#FF78ED"), // 30대 여성
                am5.color("#FF268F"), // 10대 여성
                am5.color("#030582"), // 30대 남성
                am5.color("#2D76FF"), // 20대 남성
                am5.color("#E44C96"), // 40대 여성
                am5.color("#4144FF"), // 40대 남성
                am5.color("#002BFF")  // 10대 남성
            ]
        }));
        // Set data
        series.data.setAll([{
            category: "20대 여성",
            value: 501.9
        }, {
            category: "30대 여성",
            value: 301.9
        }, {
            category: "40대 여성",
            value: 201.1
        }, {
            category: "30대 남성",
            value: 165.8
        }, {
            category: "20대 남성",
            value: 139.9
        }, {
            category: "10대 여성",
            value: 120.3
        }, {
            category: "40대 남성",
            value: 99.8
        }, {
            category: "10대 남성",
            value: 40.2
        }]);

        function animateChart(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.getElementById('chartDiv').style.opacity = 1;
                    series.appear(1000, 100);  // Start animation when chart enters viewport
                    observer.disconnect(); // Disconnect observer after the first animation
                }
            });
        }

        // Create an intersection observer
        let observer = new IntersectionObserver(animateChart, {
            threshold: 0.7 // Trigger when 50% of the chart is visible
        });

        // Observe the chartDiv element
        observer.observe(document.getElementById('chartDiv'));
    });
})


function bgChange() { // gsap 스크롤 색상변경
    gsap.registerPlugin(ScrollTrigger); // gsap 스크롤 이벤트 적용 코드

    // 박스 색상 변경 애니메이션
    gsap.to(".n1", { // 클래스명으로 대상 선언
        scrollTrigger: {
            trigger: ".n1", // 스크롤 이벤트 대상 클래스명
            start: "top 0%", // 스크롤 이벤트 시작점
            end: "bottom 40%", // 스크롤 이벤트 종료점
            scrub: true, // 스크롤에 따라 부드럽게 애니메이션
            toggleActions: "play none none reverse",
            markers: false, // 개발 시 확인용 마커
        },
        backgroundColor: "rgb(250, 250, 210)", // 변경될 색상
        color: "#000", // 텍스트 색상도 변경
        duration: 1
    });

    gsap.to(".n2", { // 클래스명으로 대상 선언
        scrollTrigger: {
            trigger: ".n2", // 스크롤 이벤트 대상 클래스명
            start: "top 80%", // 스크롤 이벤트 시작점
            end: "bottom 40%", // 스크롤 이벤트 종료점
            scrub: true, // 스크롤에 따라 부드럽게 애니메이션
            toggleActions: "play none none reverse",
            markers: false, // 개발 시 확인용 마커
        },
        backgroundColor: "#CBE4C9", // 변경될 색상
        color: "#000", // 텍스트 색상도 변경
        duration: 1
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // slide();
    // clickState();
    // click();
    // click2();
    bgChange();
    // tiping();
    // swiper();
    // swiper1();
    // swiper2();

});