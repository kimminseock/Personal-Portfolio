document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('header h1')
    const h2_1 = document.querySelector('.date h2:nth-of-type(1)'); // 날짜
    const h2_2 = document.querySelector('.date h2:nth-of-type(2)'); // 시간
    const h1 = document.querySelector('.box h1:nth-of-type(1)'); // 온도
    const h4_1 = document.querySelector('.box2 div:nth-of-type(1) h4:nth-of-type(1)'); //습도
    const h4_2 = document.querySelector('.box2 div:nth-of-type(2) h4:nth-of-type(1)'); // 풍속
    const h4_3 = document.querySelector('.box2 div:nth-of-type(3) h4:nth-of-type(1)'); // 걍수량
    const btn1 = document.querySelector('header div:nth-of-type(1) button:nth-of-type(1)');
    const btn2 = document.querySelector('header div:nth-of-type(1) button:nth-of-type(2)');
    const serviceKey = 'LbROO31IGH6Vb0%2F2H%2F4FJEcZxWuNkk%2BxI4SSKwzZ3%2Bgdl3t%2FNesXCYscPthC1Ai99WR5Oe2B7bp7XBW%2BEu6G0w%3D%3D';
    const numOfRows = 10;
    const pageNo = 1;
    // const baseData = '20241112';
    const baseData = new Date().toLocaleDateString().replaceAll('.', '').replaceAll(' ', '');
    // const baseTime = '1260';
    // const baseTime = new Date().toString().slice(15, 19).replaceAll(':', '').replaceAll(' ', '') + '00';
    const baseTime = 1500;

    btn1.addEventListener('click', function () {
        let nx = 89;
        let ny = 90;
        // // 달서구 nx => 87, ny => 90
        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst`
        url += `?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}`
        url += `&base_date=${baseData}&base_time=${baseTime}&nx=${nx}&ny=${ny}&dataType=JSON`
        // document.write(new Date().toString().slice(15, 19).replaceAll(':','') + '00');
        // document.write(url)
        // location.href = url;
        // http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=LbROO31IGH6Vb0%2F2H%2F4FJEcZxWuNkk%2BxI4SSKwzZ3%2Bgdl3t%2FNesXCYscPthC1Ai99WR5Oe2B7bp7XBW%2BEu6G0w%3D%3D&numOfRows=10&pageNo=1&base_date=20241113&base_time=1500&nx=89&ny=90&dataType=JSON
        logo.textContent = '대구광역시';
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
            console.log(obj);
            // console.log(obj.response.body.items);
            const items = obj.response.body.items.item;
            // console.log(items);
            // for(const idx in items){
            //     console.log(items[idx].category)
            // }
            items.forEach(v => {
                // console.log(v.category)
                if (v.category === 'T1H') {
                    h2_1.textContent = `${v.baseDate.slice(0, 4)}년 ${v.baseDate.slice(4, 6)}월 ${v.baseDate.slice(6, 8)}일`;
                    h2_2.textContent = `${v.baseTime.slice(0, 2)}:${v.baseTime.slice(2, 4)}`;
                    h1.textContent = `${v.obsrValue}°C`;
                    // p4.textContent = `장소: 대구광역시 중구 성내1동 격자X${v.nx} 격자Y${v.ny}`;
                }
                if(v.category === 'REH'){
                    h4_1.textContent = `${v.obsrValue}%`;
                }
                if(v.category === 'WSD'){
                    h4_2.textContent = `${v.obsrValue}m/s`;
                }
                if(v.category === 'RN1'){
                    h4_3.textContent = `${v.obsrValue}mm 1시간 기준`;
                }
            })
        }

        getJson(url, callBack);
    });
    btn2.addEventListener('click', function () {
        let nx = 98;
        let ny = 76;
        // // 달서구 nx => 87, ny => 90
        let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst`
        url += `?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}`
        url += `&base_date=${baseData}&base_time=${baseTime}&nx=${nx}&ny=${ny}&dataType=JSON`
        // document.write(new Date().toString().slice(15, 19).replaceAll(':','') + '00');
        // document.write(url)
        // location.href = url;
        // http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=LbROO31IGH6Vb0%2F2H%2F4FJEcZxWuNkk%2BxI4SSKwzZ3%2Bgdl3t%2FNesXCYscPthC1Ai99WR5Oe2B7bp7XBW%2BEu6G0w%3D%3D&numOfRows=10&pageNo=1&base_date=20241113&base_time=1500&nx=89&ny=90&dataType=JSON
        logo.textContent = '부산광역시';
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
            console.log(obj);
            console.log(obj.response.body.items);
            const items = obj.response.body.items.item;
            // console.log(items);
            // for(const idx in items){
            //     console.log(items[idx].category)
            // }
            items.forEach(v => {
                // console.log(v.category)
                if (v.category === 'T1H') {
                    h2_1.textContent = `${v.baseDate.slice(0, 4)}년 ${v.baseDate.slice(4, 6)}월 ${v.baseDate.slice(6, 8)}일`;
                    h2_2.textContent = `${v.baseTime.slice(0, 2)}시`;
                    h1.textContent = `${v.obsrValue}°C`;
                    // p4.textContent = `장소: 부산광역시 격자X${v.nx} 격자Y${v.ny}`;
                }
                if(v.category === 'REH'){
                    h4_1.textContent = `${v.obsrValue}%`;
                }
                if(v.category === 'WSD'){
                    h4_2.textContent = `${v.obsrValue}m/s`;
                }
                if(v.category === 'RN1'){
                    h4_3.textContent = `${v.obsrValue}mm 1시간 기준`;
                }
            })
        }
        getJson(url, callBack);
    });
    //위치값
    // 대구광역시 중구 삼덕동 nx => 89, ny => 90
    // const location = {
    //     "button1": {nx = 89, ny = 90},
    // }
});