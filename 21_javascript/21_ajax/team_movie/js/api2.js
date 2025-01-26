document.addEventListener('DOMContentLoaded', () => {
    //  http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8bb30c7e8268a1771461b97581d6071e&targetDt=20120101
    // https://api.themoviedb.org/3/movie/now_playing?api_key=349942b615b77ced828b97de5b0bdf19&language=ko-KR
    // 영화 순위
    // 영화 이름
    // https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception&language=ko-KR
    const serviceKey = '8bb30c7e8268a1771461b97581d6071e';
    const baseData = new Date().toLocaleDateString().replaceAll('.', '').replaceAll(' ', '');
    const baseDateY = baseData - 1;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${serviceKey}&targetDt=${baseDateY}`;
    const urlTMDBKey = '349942b615b77ced828b97de5b0bdf19';

    const div1 = document.querySelector('.item1 div:nth-of-type(1)');
    const p1 = document.querySelector('.list1 p:nth-of-type(1)');
    const p2 = document.querySelector('.list1 p:nth-of-type(2)');
    const p3 = document.querySelector('.list1 p:nth-of-type(3)');
    const p4 = document.querySelector('.list1 p:nth-of-type(4)');
    const p5 = document.querySelector('.list1 p:nth-of-type(5)');
    const p6 = document.querySelector('.list1 p:nth-of-type(6)');
    const div2 = document.querySelector('.item2 div:nth-of-type(1)');
    const p7 = document.querySelector('.list2 p:nth-of-type(1)');
    const p8 = document.querySelector('.list2 p:nth-of-type(2)');
    const p9 = document.querySelector('.list2 p:nth-of-type(3)');
    const p10 = document.querySelector('.list2 p:nth-of-type(4)');
    const p11 = document.querySelector('.list2 p:nth-of-type(5)');
    const p12 = document.querySelector('.list2 p:nth-of-type(6)');
    const div3 = document.querySelector('.item3 div:nth-of-type(1)');

    // const urlPoster = `https://api.themoviedb.org/3/movie/now_playing?api_key=${urlTMDBKey}&year=${baseDateY}language=ko-KR`;
    const img1 = document.createElement('img');
    // location.href = urlPoster;
    function getJson(url, callBack) {
        // 1. XMLHttpRequest 객체 생성
        const xhr = new XMLHttpRequest()

        // 2. HTTP 요청 초기화. 통신 방식과 url 설정
        xhr.open('GET', url);

        // 3.이벤트 등록
        // XMLHttpRequest 객체의 readyState 프로퍼티 값이 변할 때마다 자동으로 호출
        xhr.onreadystatechange = () => {
            // readtState 프로퍼티의 값이 DONE : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.
            if (xhr.readyState !== XMLHttpRequest.DONE) return

            if (xhr.status === 200) { // 서버(url)에 문서가 준재함
                console.log(xhr.responseText);
                callBack(JSON.parse(xhr.responseText));
            } else {
                console.error('Error', xhr.status, xhr.statusText)
            }
        }

        // 4. url에 요청을 보냄.
        xhr.send()
    }

    function callBack(obj) {
        const items = obj.boxOfficeResult.dailyBoxOfficeList;

        items.slice(0, 10).forEach((item) => {
            const movieTitle = encodeURIComponent(item.movieNm);
            const urlPoster = `https://api.themoviedb.org/3/search/movie?api_key=${urlTMDBKey}&query=${movieTitle}&language=ko-KR`;

            getJson(urlPoster, function (posterObj) {
                callBack1(posterObj, movieTitle);
            });
        });
    }

    function getJson1(urlPoster, callBack) {
        // 1. XMLHttpRequest 객체 생성
        const xhr = new XMLHttpRequest()

        // 2. HTTP 요청 초기화. 통신 방식과 url 설정
        xhr.open('GET', urlPoster);

        // 3.이벤트 등록
        // XMLHttpRequest 객체의 readyState 프로퍼티 값이 변할 때마다 자동으로 호출
        xhr.onreadystatechange = () => {
            // readtState 프로퍼티의 값이 DONE : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.
            if (xhr.readyState !== XMLHttpRequest.DONE) return

            if (xhr.status === 200) { // 서버(url)에 문서가 준재함
                console.log(xhr.responseText);
                callBack(JSON.parse(xhr.responseText));
            } else {
                console.error('Error', xhr.status, xhr.statusText)
            }
        }

        // 4. url에 요청을 보냄.
        xhr.send()
    }

    function callBack1(obj) {
        const posterList = obj.results;
        const targetTitle = decodeURIComponent(movieTitle);
        let found = false;
        // w92: 작은 크기 (92px 너비)
        // w154: 중간 크기 (154px 너비)
        // w185: 중간 크기 (185px 너비)
        // w342: 큰 크기 (342px 너비)
        // w500: 큰 크기 (500px 너비, 일반적으로 사용)
        // w780: 매우 큰 크기 (780px 너비)
        // original: 원본 크기
        for (const poster of posterList) {
            if (poster.title === targetTitle) {
                const posterUrl = `https://image.tmdb.org/t/p/w154${poster.poster_path}`;
                const img = document.createElement('img');

                img.src = posterUrl;
                img.alt = `${targetTitle} 포스터`;
                div1.appendChild(img); // 포스터 추가
                found = true; // 일치하는 영화가 있었음을 표시
            }
        }
        if (!found) {
            console.error(`일치하는 영화 포스터를 찾을 수 없습니다: ${targetTitle}`);
        }
    }
    getJson(url, callBack);

});