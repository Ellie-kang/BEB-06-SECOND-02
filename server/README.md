# Tako Server API
![npm](https://img.shields.io/npm/v/axios?label=axios)
![npm](https://img.shields.io/npm/v/bcrypt?label=bcrypt)
![npm](https://img.shields.io/npm/v/cookie-parser?label=cookie-parser)
![npm](https://img.shields.io/npm/v/cors?label=cors)
![npm](https://img.shields.io/npm/v/dotenv?label=dotenv)
![npm](https://img.shields.io/npm/v/express?label=express)
![npm](https://img.shields.io/npm/v/express-session?label=express-session)
![npm](https://img.shields.io/npm/v/jsonwebtoken?label=jsonwebtoken)
![npm](https://img.shields.io/npm/v/mongodb?label=mongodb)
![npm](https://img.shields.io/npm/v/mongoose?label=mongoose)
![npm](https://img.shields.io/npm/v/mongoose-unique-validator?label=mongoose-unique-validator)
![npm](https://img.shields.io/npm/v/morgan?label=morgan)
![npm](https://img.shields.io/npm/v/web3?label=web3)

Tako API는 아래 기능을 수행합니다.

- Takoyaki MongoDB에서 데이터를 가져와 배포합니다.
- POST 명령어를 통해 Article, User, Comment 등 데이터를 Takoyaki MongoDB로 추가합니다.
- Goerli 테스트넷으로 배포한 ERC-20 스마트컨트랙트와 상호작용하여 토큰 교환, 토큰 보상을 수행합니다.
- ERC-721 스마트컨트랙트와 연동해서 NFT를 새로 발행합니다.

# 실행
## 로컬 환경
Git Repo를 받은 뒤 npm 패키지를 설치합니다.
<pre><code>npm install</code></pre>
npm 패키지를 설치한 후 앱을 실행합니다.
<pre><code>npm run start</code></pre>
앱이 실행되면 localhost:3001라는 URI를 통해 API를 이용할 수 있습니다.

### __클라이언트 React앱을 실행하기 전에 반드시 Server API를 실행해주세요.__
