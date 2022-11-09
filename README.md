# Tako

<p>안녕하세요, 저희는 Tako팀입니다.<br />
이번 프로젝트에서 Tako팀은 토큰 이코노미를 가미한 투어리스트 커뮤니티 웹사이트를 개발했습니다. <p/>

<p>Tako의 투어리스트들은 글쓰기, 댓글달기 등 여러 활동을 통해 Tako 토큰을 보상 받을 수 있고<br />
이후 Tako 토큰을 사용하여 나만의 명소 사진을 NFT로 발행할 수 있습니다.</p>

<p>스펙, 데이터 스키마 등 자세한 정보는 Wiki에 모두 기록했습니다. 궁금하신 분이면 참고해 주시기 바랍니다.</p>

### [checkout WIKI](https://github.com/codestates-beb/BEB-06-SECOND-02/wiki)

<br />

## 🕵🏼 어떤 기술이 사용되었나요?<a name="techStack"></a>

[![axios - ^1.1.3](https://img.shields.io/badge/axios-^1.1.3-2ea44f)](https://www.npmjs.com/package/axios)
[![nft.storage - ^7.0.0](https://img.shields.io/badge/nft.storage-^7.0.0-2ea44f)](https://www.npmjs.com/package/nft.storage)
[![react - ^18.2.0](https://img.shields.io/badge/react-^18.2.0-skyblue)](https://www.npmjs.com/package/react)
[![react-router-dom - ^6.4.2](https://img.shields.io/badge/react--router--dom-^6.4.2-skyblue)](https://www.npmjs.com/package/react-router-dom)
[![@mui/material - ^5.10.11](https://img.shields.io/badge/%40mui%2Fmaterial-^5.10.11-violet)](https://www.npmjs.com/package/@mui/material)
[![bycrypt - ^5.1.0](https://img.shields.io/badge/bycrypt-^5.1.0-green)](https://www.npmjs.com/package/bcrypt)
[![express - ^4.18.2](https://img.shields.io/badge/express-^4.18.2-green)](https://www.npmjs.com/package/express)
[![jsonwebtoken - ^8.5.1](https://img.shields.io/badge/jsonwebtoken-^8.5.1-green)](https://www.npmjs.com/package/jsonwebtoken)
[![mongodb - ^4.11](https://img.shields.io/badge/mongodb-^4.11-red)](https://www.npmjs.com/package/mongodb)
[![mongoose - ^6.7.0](https://img.shields.io/badge/mongoose-^6.7.0-red)](https://www.npmjs.com/package/mongoose)
[![web3 - ^1.8.0](https://img.shields.io/badge/web3-^1.8.0-red)](https://www.npmjs.com/package/web3)
<img width="800" alt="스크린샷 2022-11-09 오후 3 35 49" src="https://user-images.githubusercontent.com/97439643/200756930-6a11661b-49a3-4db6-a973-9aa89e671e78.png">


<br />

## 페이지 샘플<a name="pages"></a>

### Login
![Login](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d350af69-9692-4312-85d7-e9ca4777d88e/beforeSignin.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T052934Z&X-Amz-Expires=86400&X-Amz-Signature=02be04cb045d4dcad197bfb532cec650b3785f8b18bbd13a47f7d42ec94cc1e6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22beforeSignin.gif%22&x-id=GetObject)

### SignUp
![signup2](https://user-images.githubusercontent.com/97439643/200754570-1a5e0be8-de76-4d54-897f-c8840fa2c4e3.gif)


### Main
![Main](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aba332d0-17f8-4aa6-8666-288e826879a1/mainpage_and_like.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T053523Z&X-Amz-Expires=86400&X-Amz-Signature=62e8dd332110d01891e9d67a09db87277e0101dba54b7be47dbb1b684a70607d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mainpage%2520and%2520like.gif%22&x-id=GetObject)

### Write
![Write1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/233d4969-24d3-47e3-8953-75985d946a4c/write.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T053711Z&X-Amz-Expires=86400&X-Amz-Signature=9850832fe856de8d3954140e93621158507ebbbf56c7fea1a1eb70ad2e2ce69f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22write.gif%22&x-id=GetObject)

![Write2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/523070b8-518b-4450-b516-d3824c6bf96c/afterwrite.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T053715Z&X-Amz-Expires=86400&X-Amz-Signature=057c06c0ce0225a44d92ad91397c49a88a38359a2fcf8af9ac9659380c7f2168&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22afterwrite.gif%22&x-id=GetObject)

### Account
![changeProfile1](https://user-images.githubusercontent.com/97439643/200754338-ff339744-5189-44b3-93a9-5a9f8babdf3f.gif)
![profile2](https://user-images.githubusercontent.com/97439643/200754453-4379727a-509d-49b6-9cd8-36775d588bba.gif)


### Mint
![Mint1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0cb35ed-73d9-419f-87f5-1e68bffa183d/mint.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T053941Z&X-Amz-Expires=86400&X-Amz-Signature=c0fe1d6593bea9abed8b967ee3e89158410cb78f365c936ea8bfb829a5a9f19f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mint.gif%22&x-id=GetObject)

![Mint2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b63a31fd-8fd0-4233-87cb-9ca35eb98b9e/after_mint.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221109T053945Z&X-Amz-Expires=86400&X-Amz-Signature=62710a72cb1c0c61bd87a6c1b4e61bfbe7609491049e94ac9af2b53c919295e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22after%2520mint.gif%22&x-id=GetObject)

<br />

## 🗣 Tako팀을 소개합니다.
| 이름 | 역할 | 블로그 |
|---|:---:|---|
| <b>강영아</b> | 팀 리더<br>프론트엔드<br>Repo 관리 | https://ellie-kang.tistory.com/ |
| <b>김현구</b> | 프론트엔드<br>NFT 스마트 컨트랙트 | https://www.notion.so/697962e7730f43cbb6ea960bf8cd81ac |
| <b>홍찬우</b> | 백엔드<br>토큰 스마트 컨트랙트 | https://hcw-code.github.io/ |
| <b>박희인</b> | 백엔드<br>데이터베이스 | https://red-rain.notion.site/4884b18274ca40dc8247221f044dcbdf |
