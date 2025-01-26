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
    // const urlPoster = `https://api.themoviedb.org/3/movie/now_playing?api_key=${urlTMDBKey}&year=${baseDateY}language=ko-KR`;
    const div1 = document.querySelector('.item1 div:nth-of-type(1)');
    const div2 = document.querySelector('.item2 div:nth-of-type(1)');
    const list1 = document.querySelector('.list1');
    const list2 = document.querySelector('.list2');
    const im1 = document.querySelector('.img1');
    const rank1 = document.querySelector('.rank1');

    function getJson(url, callBack) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                callBack(JSON.parse(xhr.responseText));
            } else {
                console.error('Error', xhr.status, xhr.statusText);
            }
        };

        xhr.send();
    }

    function callBack(obj) {
        const items = obj.boxOfficeResult.dailyBoxOfficeList;

        items.slice(0, 10).forEach((item) => {
            const rankItem = document.createElement('div');
            rankItem.classList.add('rank-item');

            // 영화 정보
            const p = document.createElement('p');
            rank1.textContent = `랭킹: ${item.rank} - ${item.movieNm}`;
            p.textContent = `개봉일: ${item.openDt}`;
            rankItem.appendChild(p);

            // 포스터 추가
            const movieTitle = encodeURIComponent(item.movieNm);
            const urlPoster = `https://api.themoviedb.org/3/search/movie?api_key=${urlTMDBKey}&query=${movieTitle}&language=ko-KR`;
            getJson(urlPoster, function (posterObj) {
                const posterList = posterObj.results;
                if (posterList.length > 0) {
                    const img = document.createElement('img');
                    img.src = `https://image.tmdb.org/t/p/w154${posterList[0].poster_path}`;
                    img.alt = `영화 포스터`;
                    im1.appendChild(img);
                }
            });

            // 컨테이너에 추가
            document.querySelector('.rankings-container').appendChild(rankItem);
        });
    }

    getJson(url, callBack);

});