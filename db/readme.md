<h1>MongoDB Example For Takoyaki DB</h1>

MongoDB와 Data API로 연결되는지 확인하는 예시 코드입니다.
모델이나 컨트롤러로 따로 모듈을 만들지 않은 채로
routes 안의 index.js에서 직접 API 주소로 axios post 날려서 document를 받고 있습니다.

npm run start 명령어를 실행시킨 뒤 localhost:3000으로 들어가시면
정상적으로 연동된 환경에서는 프로그램 실행 터미널에 도큐먼트 데이터가 떠야 합니다.
그렇지 않은 경우 .env 환경 변수를 확인해주세요.


> <h3>Free Tier Usage</h3>
> The way that free tier usage affects your bill depends on your consumption each month. For this example, we assume that all requests and activity are spread evenly throughout the month.
> 
> On every day of a 30 day month this application would handle 41,290 requests, 1.3 compute hours, and 16.8 GB of data transfer. The app would hit the requests/compute threshold on the 24th day of the > > month and the data transfer threshold on the first day.
> 
> The free tier would cover the following usage in each area:
> 
> - App Services Requests: 1,000,000 requests
> - App Services Compute: 7.82 hours
> - Data Transfer: 10 GB
