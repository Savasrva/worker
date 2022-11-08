Nodejs 설치할 것

git clone 후 폴더로 이동
설치 후 실행
```
npm install
node index.js
```
```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```
```
schedule.scheduleJob('* 2 * * * *', function(){
    console.log('2Min');
    request.post(options, function (err, res, body) {
        console.log(res);
    });
});

앞에서 부터 초, 분, 시, 일, 월, 요일의 순입니다.

지속적인 실행은 *를 사용하면됩니다.

특정 시간에 실행하는 것은 아래와 같이 작성하면됩니다.

매초 실행 : * * * * * *
매분 실행 : * * * * *
매분 0초에 실행 : 0 * * * * *
매분 10초에 실행 : 10 * * * * *
매시 1분 10초에 실행 : 10 1 * * * * 
```
